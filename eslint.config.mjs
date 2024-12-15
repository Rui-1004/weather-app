import globals from "globals";
import pluginJs from "@eslint/js";
import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";


/** @type {import('eslint').Linter.Config[]} */
export default [
  js.configs.recommended,
  {
    languageOptions: { globals: globals.browser }
  },
  {
    ignores: [
      "webpack.common.js",
      "webpack.dev.js",
      "webpack.prod.js"
    ]
  },
  {
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "warn"
    }
  },
  pluginJs.configs.recommended,
  eslintConfigPrettier,
];