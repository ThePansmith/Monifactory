import Juke from "juke-build";

import { CodegenCreditsTarget } from "./credits/target.js";
import { CodegenLangsTarget } from "./langs/target.js";

export const CodegenAllTarget = new Juke.Target({
    dependsOn: [CodegenCreditsTarget, CodegenLangsTarget],
});

export { CodegenCreditsTarget, CodegenLangsTarget };

export default CodegenAllTarget;
