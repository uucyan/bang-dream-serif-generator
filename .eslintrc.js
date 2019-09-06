module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'standard',
    "plugin:vue/recommended",
  ],
  plugins: [
    'vue',
    'pug'
  ],
  rules: {
    "indent": ["error", 2],
    "quotes": ["error", "single"],
    "comma-dangle": ["error", "always-multiline"],
    "semi": ["error", "never", {"beforeStatementContinuationChars": "never"}],
    "semi-spacing": ["error", {"after": true, "before": false}],
    "semi-style": ["error", "first"],
    "no-extra-semi": "error",
    "no-unexpected-multiline": "error",
    "no-unreachable": "error",
    "no-console": "off",
    "vue/max-attributes-per-line": "off",
  }
}
