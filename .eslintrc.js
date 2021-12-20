module.exports = {
    env: {
      es2021: true,
      node: true,
    },
    extends: [
      'airbnb-base',
    ],
    parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module',
    },
    rules: {
      'no-underscore-dangle': 0,
      'no-shadow': 0,
    },
  };