## Other Frequently Asked Questions:
See more at [FAQ.md](FAQ.md)

**FTBQuests not showing as completed**

Check all dependencies and ensure they are completed with a green checkmark. Some dependencies may not be on the same quest page, and will therefore not be connected with a line.
If that does not work, then go into edit mode by changing the game mode to Creative, then clicking the pencil in the bottom right of the quest UI. In edit mode, you can right-click a quest and select "Complete Instantly".

**Quark (quark) has failed to load correctly.**

This is the result of an adverse interaction between Quark and ModernFix's Dynamic Resources mixin.
Restarting the modpack a few times resolves the issue.
If it annoys you enough, then you can go into the Modernfix config and disable it.

**Game crashes when generating a superflat world.**

Lost Cities has issues with forcing players to spawn in a Lost City, and crashes when attempting to generate a superflat. Remove the mod to generate a superflat until the issue is fixed.

**Game crashes when you disable William Wythers' Overhauled Overworld**

Monifactory tweaks Wythers' worldgen with a datapack to prevent some confusing and annoying behavior like Nether music playing in the Overworld, infrequent flower generation, and high frequency of waterlogged ore veins. Unfortunately, there is no way to conditionally load world generation datapacks so disabling or removing the mod will cause this datapack to crash your game. 

It is located in `kubejs/data/minecraft/worldgen` if you wish to remove it.

**Game crashes on MacOS**

Remove Spark and ensure you are using an ARM64 version of Java 17 or higher.

**Mod versions do not match when connecting to server ([example pictured here](https://imgur.com/GL1GdwW))**

Odds are your config doesn't match the ones on the server. Pack modes (Normal, Hard, Expert) change configs, so double-check and make sure that the client and server are on the same mode!

**"Connection Lost - Invalid player data" error message**

No cause has been identified, but the leading theory is that you may have favorited or bookmarked a recipe or item that no longer exists in EMI. Download a new instance of Monifactory from scratch, test it to ensure it works, and if so then transfer over your files in chunks while repeatedly checking to ensure the error doesn't re-occur.

**GregTech textures are all switched around**

GregTech uses dynamically generated textures - reloading your resource packs may break this. Restart your game to fix it.

**KubeJS errors when updating on Prism Launcher**

Update to Prism 9.0. Previous versions of Prism don't delete files from the previous version of Moni when updating, so any file that should be removed in a modpack update won't necessarily be deleted on your end. This can cause problems.

**EMI and/or AE2 having issues with GregTech tools**

These mods don't handle NBT or tool-based crafting perfectly all the time, so you may encounter this issue occasionally. Try to transition to Assemblers or other machines ASAP. Machine crafting also offers improved material efficiency over tool crafting

**UI elements overlapping with EMI**

Switch to a lower GUI scale or tweak EMI's UI configs to your liking. Alternatively, disable EMI temporarily using Ctrl + O

**Discord Rich Presence integration doesn't match my voltage tier**

The Rich Presence integration relies on the completion of certain quests in the Progression tab to track your voltage tier. Ensure that the quest with the Machine Hull corresponding to your tier is completed, and then wait a few minutes for it to update.
Additionally, there are some reports of problems from players that use Java 22 - consider switching to Java 17 if it remains an issue.

## Issues with the new 0.13 developer build
Since it is a dev build and not an offical release, bugs are to be expected, you accepted that risk when installing it, when switching to the dev build, back up your world multiple times. Here are some known issues with the dev build to make sure actual issues that weren't known are seen instead of known issues.

**Simulation Supercomputer doesn't run recipes**
The simulation supercomputer only runs simulations with data models that haven't had any iterations ran in a normal simulation chamber, the most likely cause is how HNN adds a piece of NBT data for the amount of iterations ran, which combined with the(possible) GTm(or KubeJS but probably GTm) issue of not recognizing recipes with different NBT than defined, causes this issue

**Dark Soularium jetpack can't be crafted**
Same issue as with the simulation supercomputer, NBTs and how GTm doesn't like them.

## Other Issues with Mods
Monifactory contains multiple mods that are at different stages of completion - it is not uncommon for a bug to be caused by one of these mods instead of Monifactory specifically.
If you are unsure whether a specific mod may be causing a bug, try to replicate the bug on a *new instance with only the mods necessary to re-create the issue.* If you can do this, then the bug should be reported to that mod's developers instead of those of Monifactory

The most frequent offenders are listed below:

**Issues with [Nuclearcraft: Neoteric](https://github.com/igentuman/NuclearCraft-Neoteric)**

Nuclearcraft: Neoteric is not in a great state. Many features (including some aspects of fission reactors!) are incomplete or buggy

**Issues with [EnderIO Modern](https://github.com/Team-EnderIO/EnderIO)**

EnderIO 1.20.1 is not feature complete - things may be missing, have bugs or cause crashes.
If you encounter any issues, please properly isolate the issue and submit a bug report to the Github page above.

**Issues with [Gregtech CEu: Modern](https://github.com/GregTechCEu/GregTech-Modern)**

GTM is being actively developed. You are likely run into bugs, but these are addressed relatively quickly. Please ensure you aren't creating a duplicate report before notifying the devs of an issue or submitting a bug report to the Github page above.

**Issues with [AE2](https://github.com/AppliedEnergistics/Applied-Energistics-2/)**

Although bugs with AE2 are infrequent, the AE2 team has shown little inclination to address bugs on 1.20.1, so your best option is to find a workaround after submitting a bug report to the Github page above.
