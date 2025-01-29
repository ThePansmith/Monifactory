/**
 * ESLint configuration file.
 */

import js from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin-js";
import { MoniLabs } from "./dx/eslint-plugin/custom-plugin.mjs";

/** @type {import('eslint').Linter.Config[]} */
export default [
    js.configs.recommended,
    {
        plugins: {
            "@stylistic/js": stylistic,
        },
        rules: {
            "no-unused-vars": "off",
            "no-undef": "off",
            "no-unexpected-multiline": "off",
            "no-var": "error",
            "no-useless-escape": "warn",
            "@stylistic/js/indent": ["error", 4],
            "@stylistic/js/spaced-comment": "error",
            "@stylistic/js/linebreak-style": ["error", "unix"],
        },
    },
    MoniLabs
];
