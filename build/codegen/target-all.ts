import Juke from "juke-build";

import { CodegenCreditsTarget } from "./credits/target.ts";
import { CodegenLangsTarget } from "./langs/target.ts";

export const CodegenAllTarget = new Juke.Target({
    dependsOn: [CodegenCreditsTarget, CodegenLangsTarget],
});

export { CodegenCreditsTarget, CodegenLangsTarget };

export default CodegenAllTarget;
