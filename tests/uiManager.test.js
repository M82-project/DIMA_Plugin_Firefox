import { describe, it, expect, beforeAll } from 'vitest';
import { loadScript } from './helpers/loadScript.js';

beforeAll(() => {
  loadScript('modules/uiManager.js');
});

function makeUi() {
  return new window.UIManager({ debugMode: false });
}

let ui;
beforeAll(() => {
  ui = makeUi();
});

describe('UIManager.sanitizeHexColor', () => {
  it('accepts valid #RRGGBB', () => {
    expect(ui.sanitizeHexColor('#abcdef')).toBe('#abcdef');
    expect(ui.sanitizeHexColor('#ABCDEF')).toBe('#ABCDEF');
    expect(ui.sanitizeHexColor('#123456')).toBe('#123456');
  });

  it('rejects shorthand, missing #, named colors, and CSS injection payloads', () => {
    expect(ui.sanitizeHexColor('#abc')).toBe('#c0392b');
    expect(ui.sanitizeHexColor('#abcd')).toBe('#c0392b');
    expect(ui.sanitizeHexColor('#abcdefab')).toBe('#c0392b');
    expect(ui.sanitizeHexColor('abcdef')).toBe('#c0392b');
    expect(ui.sanitizeHexColor('red')).toBe('#c0392b');
    // No CSS injection — a malicious string is replaced by the fallback.
    expect(ui.sanitizeHexColor('#fff; background: url(x)')).toBe('#c0392b');
    expect(ui.sanitizeHexColor(null)).toBe('#c0392b');
    expect(ui.sanitizeHexColor(undefined)).toBe('#c0392b');
    expect(ui.sanitizeHexColor(42)).toBe('#c0392b');
  });
});

describe('UIManager.isSafeHttpUrl', () => {
  it('accepts http and https URLs', () => {
    expect(ui.isSafeHttpUrl('https://example.com/foo')).toBe(true);
    expect(ui.isSafeHttpUrl('http://example.com/foo')).toBe(true);
  });

  it('rejects javascript:, data:, file:, and malformed inputs', () => {
    expect(ui.isSafeHttpUrl('javascript:alert(1)')).toBe(false);
    expect(ui.isSafeHttpUrl('data:text/html,xxx')).toBe(false);
    expect(ui.isSafeHttpUrl('file:///etc/passwd')).toBe(false);
    expect(ui.isSafeHttpUrl('not a url')).toBe(false);
    expect(ui.isSafeHttpUrl(null)).toBe(false);
    expect(ui.isSafeHttpUrl(undefined)).toBe(false);
  });

  it('rejects relative URLs (Copilot review PR #3 round 2)', () => {
    // Si on autorisait les relatives, "/report" résoudrait sur l'origine
    // du site visité — exactement le site qu'on vient de marquer comme suspect.
    expect(ui.isSafeHttpUrl('/report')).toBe(false);
    expect(ui.isSafeHttpUrl('./report')).toBe(false);
    expect(ui.isSafeHttpUrl('report.html')).toBe(false);
  });
});

describe('UIManager.adjustColor', () => {
  it('returns a 7-char #RRGGBB string', () => {
    const out = ui.adjustColor('#3498db', -20);
    expect(out).toMatch(/^#[0-9a-f]{6}$/);
  });

  it('clamps without underflow on black', () => {
    expect(ui.adjustColor('#000000', -50)).toBe('#000000');
  });

  it('clamps without overflow on white', () => {
    expect(ui.adjustColor('#ffffff', 50)).toBe('#ffffff');
  });
});

describe('UIManager.generateTooltip', () => {
  it('renders score, risk level and the top techniques', () => {
    const inst = makeUi();
    inst.analysisResults = {
      globalScore: 42,
      riskLevel: 'Élevé',
      detectedTechniques: [
        { nom: 'Clickbait' },
        { nom: 'Appel à l’autorité' },
        { nom: 'Urgence' },
        { nom: 'Quatrième' },
      ],
      contentLength: 1234,
    };
    inst.suspiciousSiteCheck = { isSuspicious: false };
    const t = inst.generateTooltip();
    expect(t).toContain('DIMA Score: 42');
    expect(t).toContain('Élevé');
    expect(t).toContain('Clickbait');
    expect(t).toContain('4 techniques détectées');
    expect(t).not.toContain('Quatrième'); // only top 3 are listed
  });

  it('appends a suspicious-site warning when applicable', () => {
    const inst = makeUi();
    inst.analysisResults = {
      globalScore: 5,
      riskLevel: 'Faible',
      detectedTechniques: [],
      contentLength: 0,
    };
    inst.suspiciousSiteCheck = { isSuspicious: true };
    expect(inst.generateTooltip()).toContain('SITE SUSPECT');
  });
});
