module.exports = {
  root: true,
  extends: [
    'next/core-web-vitals',
    'plugin:jsx-a11y/recommended'
  ],
  parserOptions: {
    project: './tsconfig.json'
  },
  rules: {
    'jsx-a11y/anchor-is-valid': 'warn'
  }
}

