import { describe, it, expect, beforeAll, beforeEach } from 'vitest';
import { loadScript } from './helpers/loadScript.js';

beforeAll(() => {
  loadScript('modules/contentExtractor.js');
});

describe('ContentExtractor.cleanText', () => {
  let ce;
  beforeEach(() => {
    ce = new window.ContentExtractor({ debugMode: false });
  });

  it('preserves Latin text with French accents', () => {
    expect(ce.cleanText('Élections présidentielles à Paris')).toBe(
      'Élections présidentielles à Paris'
    );
  });

  it('collapses whitespace', () => {
    expect(ce.cleanText('a    b\n\t  c')).toBe('a b c');
  });

  it('returns empty string for null/undefined/empty', () => {
    expect(ce.cleanText('')).toBe('');
    expect(ce.cleanText(null)).toBe('');
    expect(ce.cleanText(undefined)).toBe('');
  });

  // Note : la regex actuelle strippe les caractères non-latins/non-français
  // (cyrillique, chinois, arabe). C'est une vraie limite — corrigée dans
  // le plugin Chrome, à porter sur Firefox dans une PR séparée.
  it.todo('preserves Cyrillic / Chinese / Arabic scripts (Firefox parity with Chrome)');
});

describe('ContentExtractor.detectPageType', () => {
  let ce;
  beforeEach(() => {
    ce = new window.ContentExtractor({ debugMode: false });
  });

  const at = (href) => {
    Object.defineProperty(window, 'location', {
      value: { href },
      writable: true,
      configurable: true,
    });
  };

  it('classifies news URLs', () => {
    at('https://news.example.com/article');
    expect(ce.detectPageType()).toBe('news');
  });

  it('classifies twitter / facebook / instagram as social', () => {
    at('https://twitter.com/user');
    expect(ce.detectPageType()).toBe('social');
    at('https://facebook.com/user');
    expect(ce.detectPageType()).toBe('social');
  });

  // Firefox parity gap : x.com n'est pas dans la liste des hosts sociaux.
  // À corriger lors d'une PR de parité avec le plugin Chrome.
  it.todo('classifies x.com as social');

  it('classifies commerce URLs', () => {
    at('https://shop.example.com/');
    expect(ce.detectPageType()).toBe('commerce');
  });

  it('falls back to general', () => {
    at('https://example.com/about');
    expect(ce.detectPageType()).toBe('general');
  });
});

describe('ContentExtractor.extractTitle', () => {
  let ce;
  beforeEach(() => {
    ce = new window.ContentExtractor({ debugMode: false });
    document.head.innerHTML = '';
    document.body.innerHTML = '';
  });

  it('uses document.title as a primary source', () => {
    document.title = 'My Article';
    expect(ce.extractTitle()).toContain('My Article');
  });

  it('also pulls og:title and twitter:title', () => {
    // happy-dom : assigner document.title injecte un <title> dans <head>.
    // On doit donc setter head.innerHTML AVANT, sinon on écrase le <title>.
    document.head.innerHTML = `
      <meta property="og:title" content="OG Title">
      <meta name="twitter:title" content="Twitter Title">
    `;
    document.title = 'Doc Title';
    const title = ce.extractTitle();
    expect(title).toContain('Doc Title');
    expect(title).toContain('OG Title');
    expect(title).toContain('Twitter Title');
  });

  it('caps title at 500 chars', () => {
    document.title = 'x'.repeat(1000);
    expect(ce.extractTitle().length).toBeLessThanOrEqual(500);
  });
});

describe('ContentExtractor.shouldSkipElement', () => {
  let ce;
  beforeEach(() => {
    ce = new window.ContentExtractor({ debugMode: false });
    document.body.innerHTML = '';
  });

  it('skips classes containing ad/cookie/banner substrings', () => {
    document.body.innerHTML = `
      <div class="advertisement">ad</div>
      <div class="cookie-banner">cookie</div>
    `;
    expect(ce.shouldSkipElement(document.querySelector('.advertisement'))).toBe(true);
    expect(ce.shouldSkipElement(document.querySelector('.cookie-banner'))).toBe(true);
  });

  it('skips elements with ad data attributes', () => {
    document.body.innerHTML = `<div data-ad-slot="1234">sponsored</div>`;
    expect(ce.shouldSkipElement(document.querySelector('[data-ad-slot]'))).toBe(true);
  });

  // Firefox parity gap : <nav>, <header>, <footer>, <aside> ne sont pas dans
  // skipTags ; ils ne sont skippés que si leur className/id contient le motif.
  // Chrome inclut ces balises au niveau tag.
  it.todo('skips <nav> / <header> / <footer> / <aside> by tag name');

  // Firefox parity gap : `className.includes('ad')` matche aussi "lead",
  // "head", "headvertise". Chrome utilise des frontières `(^|[-_])ad([-_]|$)`.
  it.todo('uses word boundaries on class names (no false positive on "lead", "head")');
});
