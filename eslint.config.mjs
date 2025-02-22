import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts}'] },

  {
    languageOptions: {
      globals: {
        ...globals.browser, // Spread the browser globals
        process: 'readonly', // Add your custom global here
      },
    },
    rules: {
      'no-unused-vars': 'error',
      'no-unused-expressions': 'error',
      'prefer-const': 'error',
      'no-console': 'warn',
      'no-undef': 'error',
    },
  },

  {
    ignores: [],
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
