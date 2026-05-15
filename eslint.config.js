import globals from 'globals';

export default [
  {
    ignores: ['node_modules/**', 'coverage/**', 'dist/**', 'web-ext-artifacts/**'],
  },
  // Source: content scripts run in the browser and share state via window.X = X.
  // Cross-file references go through `window.X` or via the bare global names
  // (e.g. `if (typeof rrnDomains !== 'undefined')`), so we treat the data
  // exports as readable globals at project scope. We do NOT list the same
  // names in `globals` AND let the source files redeclare them with `const`;
  // we rely on each declaration being canonical and disable no-redeclare.
  {
    files: ['content.js', 'modules/**/*.js', 'data/**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'script',
      globals: {
        ...globals.browser,
        chrome: 'readonly',
        browser: 'readonly',
        module: 'readonly',
      },
    },
    rules: {
      'no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrors: 'none',
        },
      ],
      // `const fooDomains = [...]` at top-level is read across files via the
      // shared global object — we can't predeclare them without redeclare.
      // Detection of typos relies on the test suite rather than this rule.
      'no-undef': 'off',
      'no-redeclare': 'off',
      'no-console': 'off',
      'no-empty': ['warn', { allowEmptyCatch: true }],
      eqeqeq: ['warn', 'smart'],
      'no-implicit-globals': 'off',
    },
  },
  // Tests + tooling: Node + Vitest globals.
  {
    files: ['tests/**/*.js', 'vitest.config.js', 'eslint.config.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.browser,
        describe: 'readonly',
        it: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        vi: 'readonly',
      },
    },
    rules: {
      'no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrors: 'none',
        },
      ],
    },
  },
];
