/**
 * ESLint configuration file.
 */
// @ts-check

import tslint from "typescript-eslint"
import stylistic from "@stylistic/eslint-plugin"
import globals from "globals"

/** @type {import('eslint').Linter.Config[]} */
export default [
    {
        ignores: [
            "**/*.template.ts",
        ],
    },
    {
        languageOptions: {
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },
    ...tslint.configs.recommended,
    ...tslint.configs.recommendedTypeChecked,
    {
        plugins: {
            "@stylistic/js": stylistic,
        },
        rules: {
            "no-var": "error",
            "no-useless-escape": "warn",
            "space-infix-ops": ["error", { "int32Hint": true }],
            "@stylistic/js/indent": ["error", 4],
            "@stylistic/js/spaced-comment": "error",
            "@stylistic/js/linebreak-style": ["error", "unix"],
            "@stylistic/js/no-extra-semi": "error",
            "@stylistic/js/quotes": ["error", "double", { avoidEscape: true }],
            "@stylistic/js/semi": ["error", "never"],
        },
        languageOptions: {
            globals: globals.nodeBuiltin
        },
    },
]
