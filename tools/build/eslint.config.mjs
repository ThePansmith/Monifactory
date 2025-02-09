/**
 * ESLint configuration file.
 */

import js from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin-js";
import globals from "globals";

const ignores = [
    "**/*.template.*"
]

/** @type {import('eslint').Linter.Config[]} */
export default [
    {
        ...js.configs.recommended,
        ignores,
    },
    {
        plugins: {
            "@stylistic/js": stylistic,
        },
        rules: {
            "no-var": "error",
            "no-useless-escape": "warn",
            "@stylistic/js/indent": ["error", 4],
            "@stylistic/js/spaced-comment": "error",
            "@stylistic/js/linebreak-style": ["error", "unix"],
        },
        ignores,
        languageOptions: {
            globals: globals.nodeBuiltin
        }
    },
];
