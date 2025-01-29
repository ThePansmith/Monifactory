/**
 * Custom ESLint plugin for Monifactory's KubeJS
 */

import commentHeader from "./comment-header.mjs"
import recipeSpacing from "./recipe-spacing.mjs"
import multiblockDeclaration from "./multiblock-declaration.mjs"
import callChains from "./call-chains.mjs"

/**
 * Creates a custom ESLint plugin
 * @param {string} name Plugin name
 * @param {Record<string, *>} rules Plugin rules
 */
function customPluginWithAllRulesError(name, rules) {
    return {
        plugins: {
            [name]: { rules }
        },
        rules: Object.fromEntries(
            Object.entries(rules).map(([rule]) =>
                [`${name}/${rule}`, "error"]
            )
        )
    }
}

export const MoniLabs = customPluginWithAllRulesError("moni-labs", {
    "comment-header": commentHeader,
    "recipe-spacing": recipeSpacing,
    "multiblock-declaration": multiblockDeclaration,
    "call-chains": callChains
})
