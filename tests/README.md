# Tests

Suite de tests unitaires Vitest pour le plugin DIMA Firefox.

## Lancement

```bash
npm install
npm test               # un seul run
npm run test:watch     # mode watch pour le dev
npm run test:coverage  # avec rapport de couverture (text + html + lcov)
npm run lint           # ESLint
npm run audit          # npm audit --audit-level=high
npm run ci             # lint + tests + audit, mêmes étapes que le job `test`
                       # de GitHub Actions (le job `amo-lint` qui tourne
                       # `web-ext lint` est en plus côté CI).
```

> **Note sur le lockfile.** Tant que le lockfile committé n'a pas été
> régénéré sur Linux (workaround npm/cli#4828), le job `test` de la CI
> supprime `package-lock.json` avant `npm install` pour récupérer le bon
> binaire natif Rollup pour la plateforme du runner. En local, sur
> votre OS natif, `npm ci` (ou `npm install`) à partir du lockfile
> committé fonctionne normalement — mais le graphe peut différer
> légèrement de ce que la CI installe en semver. Pour réaligner les
> deux, déclencher manuellement le workflow [`Regenerate package-lock.json`](../.github/workflows/regenerate-lockfile.yml)
> qui ouvre une PR avec un lockfile régénéré sur Linux.

## Structure

| Fichier | Couvre |
|---|---|
| [`manifest.test.js`](manifest.test.js) | JSON valide, MV3, ID AMO stable, chaque fichier déclaré (content_scripts, icons, web_accessible_resources) existe sur disque |
| [`techniqueAnalyzer.test.js`](techniqueAnalyzer.test.js) | `calculateRiskLevel`, `getColor`, `escapeRegex`, `findKeywordMatches` (frontières de mot, multi-mots, multi-occurrences), pondération contextuelle / dynamique, `performAnalysis` |
| [`contentExtractor.test.js`](contentExtractor.test.js) | `cleanText`, `detectPageType`, `extractTitle`, `shouldSkipElement` |
| [`suspiciousSitesManager.test.js`](suspiciousSitesManager.test.js) | `checkSite` (exact/contains/pattern), `getRiskConfig` |
| [`uiManager.test.js`](uiManager.test.js) | `sanitizeHexColor`, `isSafeHttpUrl` (incl. rejet des relatives), `adjustColor` (overflow/underflow), `generateTooltip` |

## Loader (`helpers/loadScript.js`)

Les scripts du plugin sont des content scripts qui font `window.X = X` à la fin. Le helper utilise un `eval` indirect dans l'environnement happy-dom de Vitest — les classes s'exposent sur `window` exactement comme dans Firefox, sans modification de la source.

`browser.runtime.getURL` / `chrome.runtime.getURL` sont stubbés puisque ces globals n'existent pas hors extension.

## CI

Workflow GitHub Actions associé :
- [`.github/workflows/ci.yml`](../.github/workflows/ci.yml) — `web-ext lint`, ESLint, Vitest, `npm audit --audit-level=high`, validation manifest sur chaque PR et push main.
