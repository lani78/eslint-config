#!/usr/bin/env node
// .eslintrc.js

/**
 * The ESLint + Typescript + Prettier config from Niklas Lagergren <lani@lani78.com> (https://lani78.com)
 *
 */

module.exports = {
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    // "plugin:@typescript-eslint/recommended-requiring-type-checking" /** broken atm */,
    'plugin:monorepo/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  plugins: ['html', 'prettier', 'react-hooks', '@typescript-eslint/eslint-plugin'],
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  parser: '@typescript-eslint/parser',
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        singleQuote: true,
        printWidth: 100,
        tabWidth: 2,
        useTabs: false,
        arrowParens: 'always',
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
        'd.ts': 'never',
      },
    ],
    'no-console': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],
    'no-unused-expressions': ['error', { allowShortCircuit: true }],
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
    'no-plusplus': ["error", { "allowForLoopAfterthoughts": true }]
  },
  settings: { 'import/resolver': { node: { extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'], }, } },
};
