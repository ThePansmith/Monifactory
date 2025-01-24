import js from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  js.configs.recommended,
  {
    rules: {
      "no-unused-vars": "off",
      "no-undef": "off",
      "no-unexpected-multiline": "off",
      "no-var": "error",
      "no-useless-escape": "warn",
    },
  },
];
