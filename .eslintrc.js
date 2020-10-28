module.exports = {
  env: {
    browser: true,
    "jest/globals": true,
  },
  extends: ["airbnb-base", "plugin:jest/recommended", "prettier"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "import/prefer-default-export": "off",
  },
};
