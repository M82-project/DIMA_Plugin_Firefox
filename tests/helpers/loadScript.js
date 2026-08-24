import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const repoRoot = resolve(import.meta.dirname, '..', '..');

// Les fichiers du plugin sont des content scripts : ils déclarent des classes
// puis font `window.Class = Class`. Pour les charger dans Vitest + happy-dom
// on utilise un `eval` indirect (qui exécute en scope global) — les classes
// elles-mêmes restent locales mais l'assignation à `window.*` retourne la
// référence dans le `window` global de happy-dom, qui est aussi `globalThis`.
//
// Important : `browser` / `chrome` n'existent pas en environnement de test,
// mais uiManager.js y fait référence au top-level
// (`_extensionAPI = browser ?? chrome`). On les stubbe avant chaque appel à
// loadScript pour éviter ReferenceError.
//
// `browser` et `chrome` pointent volontairement sur le MÊME objet : muter
// `browser.storage.local` dans un test affecte donc aussi `chrome`.
export function loadScript(relativePath) {
  ensureExtensionApiStub();
  const src = readFileSync(resolve(repoRoot, relativePath), 'utf8');
  (0, eval)(src);
}

function ensureExtensionApiStub() {
  const stub = {
    runtime: {
      getURL: (path) => `moz-extension://test/${path}`,
    },
    storage: {
      local: {
        get: async () => ({}),
        set: async () => undefined,
      },
    },
  };
  if (typeof globalThis.browser === 'undefined') {
    globalThis.browser = stub;
  }
  if (typeof globalThis.chrome === 'undefined') {
    globalThis.chrome = stub;
  }
}

// Réinitialise les globals injectés par les scripts entre deux suites
// quand on veut un état propre. Sinon, happy-dom recycle son window.
export function resetGlobals(keys) {
  for (const key of keys) {
    delete globalThis[key];
    if (typeof globalThis.window !== 'undefined') {
      delete globalThis.window[key];
    }
  }
}
