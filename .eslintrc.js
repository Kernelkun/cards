const path = require('path')

module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'arrow-parens': 0,
    'comma-dangle': 0,
    'import/no-unresolved': 0,
    'react/jsx-filename-extension': 0,
    semi: 0
  },
}
