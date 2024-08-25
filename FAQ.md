## Frequently Asked Questions
### General
**Q. Where can I download Monifactory?**

Stable builds of Monifactory can be downloaded from CurseForge using any launcher of your choice (PrismLauncher, CurseForge, etc.)
Bleeding edge builds can be found [here](https://github.com/ThePansmith/Monifactory/releases)

**Q. What's the difference between Monifactory and Nomifactory CEu?**

A comprehensive list of changes can be found [here](https://gist.github.com/ThePansmith/f2637bcbcb37b6d7f07cddb8a3385f14)

**Q. Can my PC run Monifactory?**

Monifactory should run on any computer with a CPU newer than 2019. Allocating 6GB of RAM is recommended<br>
``NOTE: If your computer has 8GB RAM or less, assume that Monifactory will not run on it``

**Q. Can I add 'X' mod to Monifactory?**

By default, Monifactory only supports the mods included with it, and has optional compat for ComputerCraft, Create, and Tempad. Any other mods added may break progression and/or deviate from the intended experience, but feel free to add them to your personal instance. Note that support may not be provided for bugs related to mods not shipped with the pack

**Q. Will Monifactory be ported to 'X' Minecraft version?**

Monifactory will not be backported to any versions before 1.20.1. Porting the pack to a future version of Minecraft may or may not happen, but **do not ask and pester the devs**.

**Q. I've found a bug, where do I report it?**

You can report it on the [Monifactory issue tracker](https://github.com/ThePansmith/Monifactory/issues). If the issue lies with GregTech itself or another mod, report it to their respective issue trackers

**Q. How do I setup a dedicated multiplayer server?**

[Instructions can be found here](https://github.com/ThePansmith/Monifactory?tab=readme-ov-file#dedicated-server-installation)

<!--- Essential PSA, I've commented this out for now. Feel free to edit/uncomment 

**Q. Does Monifactory support Essential world hosting?**

Essential is not officially supported, and various unsupported bugs and crashes may arise from hosting using it. Support will not be provided for these -->

**Q. How do I play Monifactory Hard Mode/Harder Mode?**
   

[Instructions can be found here](https://github.com/ThePansmith/Monifactory?tab=readme-ov-file#hardharder-mode-installation)

### Tech Support

**Q. The server says I don't have the right version of a mod, but I do! ([example pictured here](https://imgur.com/GL1GdwW))**

Odds are your config doesn't match the ones on the server. If the server is running on hardmode, make sure that you've updated your client too

**Q. My GregTech textures are all messed up!**

GregTech uses dynamically generated textures, reloading your resource packs may break this. Restarting the game should fix it

**Q. My game is crashing on MacOS!**

Remove spark and ensure you are using an Arm64 version of >java 17

**Q. Making a superflat world crashes my game!**

Known issue with Lost Cities, disable the mod if you wish to generate a superflat world

**Q. My UI elements are overlapping!**

Switch to a lower GUI scale or figure out if you can move the conflicting thing, all EMI boxes are editable

**Q. I lowered the rarity of Lost Cities, but I still spawn in one!**

Lost Cities is configured to always spawn the player in a city. Disable the mod entirely if you don't want them

**Q. My EnderIO filters aren't working!**

EnderIO 1.20 is not in a great state and not supported, don't expect many things to work. Try to use alternatives such as GregTech pipes or LaserIO. Energy conduits should work fine however

**Q. My EnderIO conduits aren't extracting!**

Conduits are set by default to extract on high redstone input, click the redstone torch and switch to always, low redstone, or whatever you please.

**Q. Why is my UI so dark?**

DarkModeEverywhere is enabled by default, and makes your UI darker (duh). You can switch colors using the button in the bottom left of your inventory screen, or on the main menu

**Q. My issue isn't listed above!**

Report it to the [issue tracker](https://github.com/ThePansmith/Monifactory/issues), or get help on the [Discord](https://discord.gg/N8b2JEfAqb)

## Contributing to Monifactory
<!-- Todo; look at the contributions.md PR-->