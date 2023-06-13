module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 11
  },
  plugins: ['@typescript-eslint', 'react-hooks'],
  rules: {
    '@typescript-eslint/ban-ts-comment': 1,
    'react-hooks/rules-of-hooks': 'error', // For checking rules of hooks
    'react-hooks/exhaustive-deps': 'warn' // For checking hook dependencies
  },
  ignorePatterns: ['dist', 'node_modules']
};
