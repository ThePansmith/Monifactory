export type MCIdentifier = `${string}:${string}`

export type GTJSONRecipeChanced = {
    chance: number
    maxChance: number
    tierChanceBoost: number
}
export type GTJSONRecipeChancedContents<Content> = ({content: Content} & GTJSONRecipeChanced)[]

export type GTJSONRecipeItemIngredient = {
    item: MCIdentifier
} | {
    tag: MCIdentifier
} | {
    type: "forge:nbt"
    item: MCIdentifier
    count: number
    nbt: object
}

export type GTJSONRecipeItem = {
    type: "gtceu:sized"
    count: number
    ingredient: GTJSONRecipeItemIngredient
} | {
    type: "gtceu:circuit"
    configuration: number
} | {
    type: "forge:intersection"
    children: {tag: MCIdentifier}[]
}

export type GTJSONRecipeFluid = {
    amount: number
    // Yes, this array does always have exactly 1 element. IDK why.
    value: [{
        tag: MCIdentifier
    } | {
        fluid: MCIdentifier
    }]
}

export type GTJSONRecipeIO = {
    item?: GTJSONRecipeChancedContents<GTJSONRecipeItem>
    fluid?: GTJSONRecipeChancedContents<GTJSONRecipeFluid>
}

export type GTJSONRecipeCondition = {
    type: "cleanroom"
    cleanroom: "cleanroom" | "sterile_cleanroom"
} | {
    type: "research"
    research: [{
        researchId: string
        dataItem: {
            id: MCIdentifier
            Count: number
            tag: object
        }
    }]
}

export type GTJSONRecipe = {
    /** Machine ID
     * @example gtceu:arc_furnace
     */
    type: MCIdentifier

    /** Recipe category
     * @example gtceu:arc_furnace_recycling
     */
    category: MCIdentifier

    duration: number

    inputs?: GTJSONRecipeIO
    outputs?: GTJSONRecipeIO

    tickInputs?: {
        eu?: GTJSONRecipeChancedContents<number>
        cwu?: GTJSONRecipeChancedContents<number>
    }
    tickOutputs?: {
        eu?: GTJSONRecipeChancedContents<number>
    }
    // All fields above are 100% complete

    recipeConditions?: GTJSONRecipeCondition[]

    // TODO these when needed
    inputChanceLogics: unknown
    outputChanceLogics: unknown

    tickInputChanceLogics: unknown
    tickOutputChanceLogics: unknown

    category: unknown
    pattern: unknown
    key: unknown
    overrideCharge: unknown
    transferMaxCharge: unknown
    chargeIngredient: unknown
    result: unknown
    ingredient: unknown
    experience: unknown
    cookingtime: unknown
    ingredients: unknown
    data: unknown
}