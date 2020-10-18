module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
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
  plugins: ['react', 'prettier'],
  rules: {
    'arrow-parens': 0,
    'comma-dangle': 0,
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'object-curly-newline': 0,
    'prettier/prettier': ['error'],
    'react/jsx-filename-extension': 0,
    'react/jsx-props-no-spreading': 0,
    semi: 0
  }
}
