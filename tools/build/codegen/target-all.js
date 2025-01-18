import Juke from "../juke/index.js"

import CodegenCreditsTarget from "./credits/target"
import CodegenLangsTarget from "./langs/target"

export const CodegenAllTarget = new Juke.Target({
    dependsOn: [CodegenCreditsTarget, CodegenLangsTarget]
})

export default CodegenAllTarget