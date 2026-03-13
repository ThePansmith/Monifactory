// priority: 900
/**
 * Pack mode management.
 * Handles the interpretation of packmode.json to determine the global pack mode.
 * This determines the values of global booleans like doHNN, doHarderProcessing, and doMonicoins.
 * These are used in other scripts to define pack mode-specific behavior.
 */

// Packmode config path & name
const configName = "config/packmode.json";


// Default mode.json
const defaultConfig = {
    mode: "Normal",
    message: "This tells KubeJS what mode the pack is currently in, pack mode can be changed in the main menu after loading the game"
};


// Handle the possibility that there may not be a mode.json
let config = JsonIO.read(configName);
if (!config || !config.mode) {
    JsonIO.write(configName, defaultConfig);
    console.log(`Created new ${configName}`);
    config = defaultConfig;
}

let invalidConfig = function (configMode) {
    JsonIO.write(configName, defaultConfig);
    config.mode = defaultConfig.mode;
    console.error(`Overwrote ${configName}, because the mode ${configMode} was found. Valid modes are 'Normal', 'Hard', 'Expert' and 'Insanity'.`);
}

let packMode = config.mode;
switch (packMode) {
case "Normal": case "Hard": case "Expert": case "Insanity": break;
default: invalidConfig(); packMode = config.mode;
}


// String representation of the current packmode
global.packmode = packMode;

// [DEPRECATED] Global mode booleans. Note that isHardMode is also true if the pack is in Expert
/**
 * True if the modpack is in Normal Mode.
 * @deprecated as of 3/7/2025, Monifactory version 0.12.0.
 * Create or or use a feature-specific boolean instead.
 * See KubeJS/startup_scripts/_packmode.js for examples.
 */
global.isNormalMode = packMode == "Normal";

/**
 * True if the modpack is in Hard or Expert Mode.
 * @deprecated as of 3/7/2025, Monifactory version 0.12.0.
 * Create or or use a feature-specific boolean instead.
 * See KubeJS/startup_scripts/_packmode.js for examples.
 */
global.isExpertMode = packMode == "Expert";

/**
 * True if the modpack is in Hard Mode.
 * @deprecated as of 3/7/2025, Monifactory version 0.12.0.
 * Create or or use a feature-specific boolean instead.
 * See KubeJS/startup_scripts/_packmode.js for examples.
 */
global.isHardMode = (packMode == "Hard") || global.isExpertMode;


/**
 * True if the modpack is in Normal Mode.
 * @deprecated as of 3/7/2025, Monifactory version 0.12.0.
 * Create or or use a feature-specific boolean instead.
 * See KubeJS/startup_scripts/_packmode.js for examples.
 */
const isNormalMode = !!global.isNormalMode;

/**
 * True if the modpack is in Hard or Expert Mode.
 * @deprecated as of 3/7/2025, Monifactory version 0.12.0.
 * Create or or use a feature-specific boolean instead.
 * See KubeJS/startup_scripts/_packmode.js for examples.
 */
const isExpertMode = !!global.isExpertMode;

/**
 * True if the modpack is in Hard Mode.
 * @deprecated as of 3/7/2025, Monifactory version 0.12.0.
 * Create or or use a feature-specific boolean instead.
 * See KubeJS/startup_scripts/_packmode.js for examples.
 */
const isHardMode = !!global.isHardMode;

/*
Global feature toggle booleans. Shared across client and server.
If you want to alter some mode-specific features on your instance, do so here.
However, be warned that if you do so then no support will be provided for any issues you may encounter.
On the flipside, if you create your own fix for an issue you encounter, then any Pull Requests with such a fix are welcome.
*/
global.doAssemblyLineOrderingWarning = packMode == "Expert" || packMode == "Insanity";
global.doBoilers = packMode == "Normal" || packMode == "Hard";
global.doCompacting = packMode == "Normal" || packMode == "Hard";
global.doConverters = packMode == "Normal" || packMode == "Hard";
global.doHarderPrintedSilicon = packMode == "Expert" || packMode == "Insanity";
global.doHarderProcessing = packMode == "Hard" || packMode == "Expert" || packMode == "Insanity";
global.doHarderRecipes = packMode == "Hard" || packMode == "Expert" || packMode == "Insanity";
global.doHardGlassRecipesWarning == packMode == "Hard" || packMode == "Expert" || packMode == "Insanity";
global.doHatchRevert = packMode == "Normal" || packMode == "Hard";
global.doHNN = packMode == "Normal";
global.doLaserIO = packMode == "Normal" || packMode == "Hard";
global.doMeowniPlush = packMode == "Hard" || packMode == "Expert" || packMode == "Insanity";
global.doMonicoins = packMode == "Normal";
global.doSnad = packMode == "Normal" || packMode == "Hard";
global.doSteamAge = packMode == "Hard" || packMode == "Expert" || packMode == "Insanity";
global.doEUP2P = packMode == "Normal"
global.doFluxbore = packMode == "Normal" || packMode == "Hard";
global.doHarderFluxBore = packMode == "Normal" || packMode == "Hard";
global.doQuantumCoolant = packMode == "Hard" || packMode == "Expert" || packMode == "Insanity";
global.doHostileMicroverse = packMode == "Hard" || packMode == "Expert" || packMode == "Insanity";

/* INSANITY MODE: WARNING.
 * Insanity mode has been hastily developed by me (WithersChat) alone in under a month.
 * Its goal is to satirize my own game design style, by exaggerating both ideas I find cool and innovative, and ideas that are just too brutal to be fun or far beyond
 *  the skills of Monifactory's target audience. I do not expect most of those features to live longer than the April Fools update.
 * Despite this, I am going out of my way to implement them in a future-proof way where my skills allow it, so that preserving any of those in the future
 *  is doable if one so chooses, and to make this more believable.
 * PLAY AT YOUR OWN RISK.
 * 
 * P.S. I don't know who I'm typing this for because I want to troll the devs as well and so this comment will likely be removed before pushing LMAO.
 */


// Gonna describe them quickly here so I remember what drugs I was on.
// They're mostly ranked in order of implementation complexity here.

/* COMPLEX PRISMATIC CRUCIBLE
 * Ever felt disappointed that the randomness capabilities of this multiblock were underused? Are you sad that the Sensor Hatches were never that useful?
 *  Did you wish that more processes used this machine and that it was introduced earlier?
 * Well, today's your lucky day, because this toggle does exactly that. Hard mode supercritical line will soon look easy.
 * Main features:
 * - Reworked Chromatic Stabilizer recipe to use a 3rd, simpler recipe map. Renamed to Photonic Stabilizer and used before PRISM becomes relevant.
 * - PrismaC now gated to UV components rather than UHV (still uses Actneth)
 * - PRISM can fail. Lol. Wrong color returns previous tier of glass without changing color
 * - Reworked PSoCs to have a fail state and require more creativity in your setup
 *      This option might interact interestingly with the Complex Circuits toggle...
 * - Supercritical cores now make heavy use of randomness. I hope you like having multiple PrismaCs >:3
 *      This change comes with capacitors being MUCH more expensive. Like, WA-level expensive. You ain't easily overcrafting your way out of this puzzle >:3
 * - PRISM and PSoCs become relevant earlier.
 */
global.doComplexPrismaC = packMode == "Insanity";

/* COMPLEX MICROVERSES
 * A major expansion of the Microverse type system with 4 new types and extremely cursed mechanics.
 * - Hostile has a tougher, Abyssal variant, and both reset to the lesser hostility tier (or normal) if integrity reaches max (Monifactory: Now with genocide!)
 * - Necrosed replaces the thematic role of former Shattered, with a decay rate of 1 for the memes. Shattered becomes relevant earlier, unchanged mechanics.
 *      Both decay into Corrupted.
 * - Supercharged being a heightened state of Corrupted that can explode if left unchecked (still not sure on that one).
 * - Degenerate is the fail state of Hostile, Abyssal and Corrupted. Handle it quick or your game crashes.
 *      But if you feel adventurous and with the right materials, you might be able to extract precious Shards of Causality. (If implementable.)
 * REQUIRES HOSTILE MICROVERSES ENABLED
 */
global.doComplexMicroverses = packMode == "Insanity";

/* COMPLEX CIRCUITS
 * Whatever reworks I can think of related to circuit themes. Might scrap all or parts of this one if I lack the time. Ideas include:
 * - Reintroducing Refined Circuits from the ol' Nomi CE days (because Withers).
 * - Changing the number of circuit I/O per theme per step (because Withers).
 * - A rework of Quantum Circuits to add spice to them (Virtual Particle Synthesizer?)
 * - In-world crafting steps for Crystal Chips, because I love chaos >:3
 * - Spicier wetware circuits: more biochemistry, and SVat chanced outputs >:3
 * - A full Optical circuits rework based on my "Omicron Industries Training Protocol: Logistical Mastery" idea.
 * - Not touching Extradimensional Circuits much since they'll be affected by all of the above >:3
 */
global.doComplexCircuits = packMode == "Insanity";

// The !! is to cast the types into boolean since they got transformed into Java Objects from being globals
const doAssemblyLineOrderingWarning = !!global.doAssemblyLineOrderingWarning;
const doBoilers = !!global.doBoilers;
const doCompacting = !!global.doCompacting;
const doConverters = !!global.doConverters;
const doEUP2P = !!global.doEUP2P
const doHarderPrintedSilicon = !!global.doHarderPrintedSilicon;
const doHarderProcessing = !!global.doHarderProcessing;
const doHarderRecipes = !!global.doHarderRecipes;
const doHardGlassRecipesWarning = !!global.doHardGlassRecipesWarning;
const doHatchRevert = !!global.doHatchRevert;
const doHNN = !!global.doHNN;
const doLaserIO = !!global.doLaserIO;
const doMeowniPlush = !!global.doMeowniPlush;
const doMonicoins = !!global.doMonicoins;
const doSnad = !!global.doSnad;
const doSteamAge = !!global.doSteamAge;
const doFluxbore = !!global.doFluxbore;
const doHarderFluxBore = !!global.doHarderFluxBore;
const doQuantumCoolant = !!global.doQuantumCoolant;
const doHostileMicroverse = !!global.doHostileMicroverse;

// Insanity-only toggles. Welcome to hell >:3 (Never let Withers cook again.)
const doComplexPrismaC = !!global.doComplexPrismaC;
const doComplexMicroverses = !!global.doComplexMicroverses;
const doComplexCircuits = !!global.doComplexCircuits;
