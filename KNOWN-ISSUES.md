## Other Frequently Asked Questions:
See more at [FAQ.md](FAQ.md)

**EnderIO fluid conduits too slow and not accepting Filters**

This is a known issue with EnderIO - your best option is to use an alternative such as GregTech pipes, LaserIO, or something from the Addon Mods (Optional Compats)

**EMI and/or AE2 having issues with GregTech tools**

These mods don't handle NBT or tool-based crafting perfectly all the time, so you may encounter this issue occasionally. Try to transition to Assemblers or other machines ASAP. Machine crafting also offers improved material efficiency over tool crafting

**UI elements overlapping with EMI**

Switch to a lower GUI scale or tweak EMI's UI configs to your liking. Alternatively, disable EMI temporarily using Ctrl + O

**Game crashes when generating a superflat world.**

Lost Cities has issues with forcing players to spawn in a Lost City, and crashes when attempting to generate a superflat. Remove the mod to generate a superflat until the issue is fixed.

**Game crashes on MacOS**

Remove Spark and ensure you are using an ARM64 version of Java 17 or higher

**Mod versions do not match when connecting to server ([example pictured here](https://imgur.com/GL1GdwW))**

Odds are your config doesn't match the ones on the server. If the server is running on Hard Mode, make sure that you've updated your client too

**GregTech textures are all switched around**

GregTech uses dynamically generated textures - reloading your resource packs may break this. Restart your game to fix it

## Other Issues with Mods
Monifactory is built off of multiple mods that are at various stages of completion - it is not uncommon for a bug to be caused by one of these mods instead of Monifactory specifically.
If you are unsure whether a specific mod may be causing a bug, try to replicate the bug on a *new instance with only the mods necessary to re-create the issue.* If you can do this, then the bug should be reported to that mod's developers instead of those of Monifactory

The most frequent offenders are listed below

**Issues with EnderIO Modern**

EnderIO 1.20.1 is not in a great state. Updates and fixes are infrequent, so most features may have bugs or cause crashes - some items and blocks are made unobtainable for this reason.
For item and fluid conduits specifically, try to use alternatives such as GregTech pipes, LaserIO, or a logisics option offered by an Optional Compat such as XNet

**Issues with Nuclearcraft:Neoteric**

Nuclearcraft:Neoteric is not in a great state either. Many features (including some aspects of fission reactors!) are incomplete or buggy

**Issues with Gregtech CEu: Modern**

GTCEu is being reworked and added to on an ongoing basis. You may run into the occasional bug, but these are addressed relatively quickly - please ensure you aren't creating a duplicate report before notifying the devs of an issue.

**Issues with AE2**

Although bugs with AE2 are infrequent, the AE2 team has shown little inclination to address bugs on 1.20.1 so your best option is to find a workaround after submitting a bug report.