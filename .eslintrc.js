module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb/base', 'airbnb-typescript/base', 'prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.eslint.json',
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error'],
  },
};
