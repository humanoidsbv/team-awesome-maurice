module.exports = {
  extends: ["@humanoids/eslint-config", "plugin:cypress/recommended"],
  rules: {
    "@typescript-eslint/no-explicit-any": "warn",
  },
  env: {
    jest: true,
  },
};
