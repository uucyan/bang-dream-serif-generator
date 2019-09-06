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
    // "eslint:recommended",
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    "plugin:vue/recommended",
    // "plugin:prettier/recommended"
  ],
  // required to lint *.vue files
  plugins: [
    'vue',
    'pug'
  ],
  // add your custom rules here
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
    // "semi": [2, "never"],
    "no-console": "off",
    "vue/max-attributes-per-line": "off",
    // "prettier/prettier": ["error", { "semi": false }]
  }
}
