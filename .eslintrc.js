/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line no-var
var path = require('path')

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: '.',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'airbnb-typescript',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  plugins: [
    '@typescript-eslint',
    'jsx-a11y',
    'react-hooks',
    'react',
    'graphql',
  ],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'react/prop-types': 0,
    'react/jsx-one-expression-per-line': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'import/prefer-default-export': 0,
    'import/no-dynamic-require': 0,
    'global-require': 0,
    'react/jsx-props-no-spreading': 0,
    '@typescript-eslint/lines-between-class-members': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'jsx-a11y/anchor-is-valid': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    'graphql/template-strings': [
      'error',
      {
        env: 'apollo',
        tagName: 'gql',
        schemaJsonFilepath: path.resolve(__dirname, 'graphql.schema.json'),
      },
    ],
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],
  },
}
