module.exports = {
  ...require('@crux/config/eslint-react'),
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
  ignorePatterns: ['*.json'],
  }