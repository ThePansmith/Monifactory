export type ValueOf<T> = T[keyof T]

export type MCIdentifier = `${string}:${string}`

export type GTJSONRecipeChanced = {
    chance?: number
    maxChance?: number
}
export type GTJSONRecipeChancedContents<Content> = ({content: Content} & GTJSONRecipeChanced)[]

export type GTJSONRecipeItemIngredient = {
    item: Special.Item
} | {
    tag: string
} | {
    type: "forge:nbt"
    item: MCIdentifier
    count: number
    nbt: object
} | {
    type: "gtceu:circuit"
    configuration: number
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
            id: Special.Item
            Count: number
            tag: object
        }
    }]
}

export type GTJSONRecipeChanceLogics = {
    item?: string
    // TODO?
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

    recipeConditions?: (GTJSONRecipeCondition | ValueOf<{
        [T in GTJSONRecipeCondition['type']]: {
            type: T
            data: Omit<GTJSONRecipeCondition & { type: T }, "type">
        }
    }>)[]

    inputChanceLogics?: GTJSONRecipeChanceLogics
    outputChanceLogics?: GTJSONRecipeChanceLogics

    // TODO these when needed
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
