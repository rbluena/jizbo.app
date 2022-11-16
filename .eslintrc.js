module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'import', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/function-component-definition': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/forbid-prop-types': 'off',
    'no-use-before-define': 'off',
    'no-restricted-exports': 'off',
    'import/no-extraneous-dependencies': 'off',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@app', './app'],
          ['~', './'],
        ],
        extensions: ['.js', '.jsx'],
      },
    },
  },
};
