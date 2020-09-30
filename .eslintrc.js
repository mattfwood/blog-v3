module.exports = {
  extends: ['cratebind', 'plugin:import/typescript'],
  rules: {
    'react/react-in-jsx-scope': 0,
    // "import/no-unused-modules": [1, {"ignoreExports": ['pages/**/*.tsx']}]
    "import/no-unused-modules": 0,
    '@typescript-eslint/no-unused-vars': 2
  },
  "ignorePatterns": ["next-seo.config.js", ".eslintrc.js"],
}