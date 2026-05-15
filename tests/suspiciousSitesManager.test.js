import { describe, it, expect, beforeAll } from 'vitest';
import { loadScript } from './helpers/loadScript.js';

beforeAll(() => {
  loadScript('modules/Suspicioussitesmanager.js');
});

function makeManager(seed = {}) {
  const m = new window.SuspiciousSitesManager();
  // Replace any auto-loaded sources with a clean controlled seed.
  m.sources = new Map();
  m.allSites = [];
  for (const [name, sites] of Object.entries(seed)) {
    m.sources.set(name, { domains: sites, metadata: {}, count: sites.length });
    m.allSites.push(...sites);
  }
  return m;
}

describe('SuspiciousSitesManager.checkSite (domain formats)', () => {
  it('exact match handles bare host and www', () => {
    const m = makeManager({
      Test: [{ domain: 'badnews.example', matchType: 'exact', riskLevel: 'high' }],
    });
    expect(m.checkSite('https://badnews.example/foo').isSuspicious).toBe(true);
    expect(m.checkSite('https://www.badnews.example/foo').isSuspicious).toBe(true);
    expect(m.checkSite('https://goodnews.example/foo').isSuspicious).toBe(false);
  });

  it('contains match recognises subdomain placement', () => {
    const m = makeManager({
      Test: [{ domain: 'rt.com', matchType: 'contains', riskLevel: 'high' }],
    });
    expect(m.checkSite('https://news.rt.com/article').isSuspicious).toBe(true);
    expect(m.checkSite('https://rt.com/article').isSuspicious).toBe(true);
    expect(m.checkSite('https://example.com/').isSuspicious).toBe(false);
  });

  it('pattern match uses regex (case-insensitive)', () => {
    const m = makeManager({
      Test: [{ domain: '^pravda-[a-z]+\\.com$', matchType: 'pattern', riskLevel: 'high' }],
    });
    expect(m.checkSite('https://pravda-fr.com/').isSuspicious).toBe(true);
    expect(m.checkSite('https://PRAVDA-DE.COM/').isSuspicious).toBe(true);
    expect(m.checkSite('https://pravda.com/').isSuspicious).toBe(false);
  });

  it('returns the matched site info and a risk config', () => {
    const m = makeManager({
      Test: [
        {
          domain: 'badnews.example',
          matchType: 'exact',
          riskLevel: 'critical',
          reason: 'r',
          source: 's',
        },
      ],
    });
    const res = m.checkSite('https://badnews.example/');
    expect(res.isSuspicious).toBe(true);
    expect(res.siteInfo.reason).toBe('r');
    expect(res.riskConfig.label).toBe('Risque Critique');
  });
});

describe('SuspiciousSitesManager.getRiskConfig', () => {
  it('returns a known config for each documented risk level', () => {
    const m = makeManager();
    expect(m.getRiskConfig('critical').label).toMatch(/Critique/i);
    expect(m.getRiskConfig('high').label).toMatch(/Élevé/i);
    expect(m.getRiskConfig('medium').label).toBeTruthy();
  });

  it('falls back gracefully on unknown levels', () => {
    const m = makeManager();
    const cfg = m.getRiskConfig('totally-unknown');
    expect(cfg).toBeDefined();
    expect(cfg).not.toBeNull();
  });
});
