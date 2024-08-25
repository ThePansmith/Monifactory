<p align="center"><img src="https://github.com/ThePansmith/Monifactory/assets/70342772/4ac1d5e7-0610-4f44-bfed-b3b2022eecc0" height="250" alt="Logo"></p>
<h1 align="center">Monifactory</h1>
<p align="center"><b><i>A Remaster and Port of <a href="https://github.com/Nomi-CEu/Nomi-CEu"> Nomifactory CEu</a>, using <a href="https://github.com/GregTechCEu/GregTech-Modern"> GregTech CEu Modern</a> and its related mods.</i></b></p>
<h1 align="center">
    <a href="https://github.com/ThePansmith/Monifactory/blob/main/LICENSE.md"><img src="https://img.shields.io/github/license/Nomi-CEu/Nomi-CEu?style=for-the-badge&logo=github" alt="License"></a>
    <img src="https://img.shields.io/github/actions/workflow/status/ThePansmith/Monifactory/build_pr.yml?branch=main&style=for-the-badge&label=Dev%20Build" alt="GitHub Actions Workflow Status">
    <!-- <a href="https://discord.com/invite/zwQzqP8b6q"><img src="https://img.shields.io/discord/927050775073534012?style=for-the-badge&logo=discord&color=5865F2&labelColor=grey&label=+" alt="Discord"></a> -->
    <br>
    <a href="https://www.curseforge.com/minecraft/modpacks/Monifactory"><img src="https://cf.way2muchnoise.eu/monifactory.svg?badge_style=for_the_badge" alt="CurseForge"></a>
    <a href="https://www.curseforge.com/minecraft/modpacks/Monifactory"><img src="https://cf.way2muchnoise.eu/versions/For%20MC_Monifactory_all.svg?badge_style=for_the_badge" alt="MC Versions"></a>
    <a href="https://github.com/ThePansmith/Monifactory/releases"><img src="https://img.shields.io/github/downloads/ThePansmith/Monifactory/total?style=for-the-badge&labelColor=grey&logo=github&label=+" alt="GitHub Downloads"></a>
</h1>

## Features
- [Plenty of changes throughout the entire pack, from new multiblocks, to new mods, to new progression](https://gist.github.com/ThePansmith/f2637bcbcb37b6d7f07cddb8a3385f14)
- A complete overhaul of post-tank progression
- The removal of Draconic Evolution and Avaritia, replaced with new mechanics
- A new difficulty mode for returning Nomi CEu HM players
- A Retexturing of everything Nomi to better match the modern style
- Optional Compatibility with various mods, such as Create

## Credits
- Original pack by [Exaxxion](https://github.com/Exaxxion).
- Nomifactory CEu pack by [Tracer](https://github.com/tracer4b).  
- README.md base from [Gregtech CEu](https://github.com/GregTechCEu/GregTech).  
- Meowni (mascot) by Mutso  
- Certain new quests from [GregTech Community Pack](https://github.com/GregTechCEu/GregTech-Community-Pack).  
- Perfect Gem textures from [FurfSky Reborn](http://furfsky.net/). ([Permission](https://ibb.co/bBpksq0) at [this message](https://discord.com/channels/771187253937438762/774353150278369351/938438074503942184) in [FurfSky Reborn server](https://discord.gg/fsr)).  
Thank you!

## Hard/Harder Mode
Is Monifactory not Greggy enough for you? Or perhaps you simply want a challenge? Try hard mode! (or even harder mode, if you're not faint of heart!)

Highlights include:

- Forced Peaceful Mode
- No HNN for easy infinite resources
- Monicoins can't be spent
- The Steam Age
- More Focus on GT Power Generation
- No Creative Tank; instead, use Stabilized Micro Miners for late-game infinite resources

Harder Mode is a modifier for Hard Mode, and takes things a step further by:

- Outright Disabling RF->EU Converters, making GT power generation your only option.
- Removing EnderIO, Laserio Item and Fluid Transportation Options
- Bringing Back Machine Explosions
- Enabling Pollution and Hazards
- Various other nerfs

## Installation:

### Hard/Harder Mode Installation:
1. Click on ``./pack-mode-switcher.bat`` if you're on Windows, or ``./pack-mode-switcher.sh`` if you're on Linux/Apple/GNU (located within your minecraft folder)
2. Follow the prompt to select your mode.

### Dedicated Server Installation:
1. Download a server.zip file from the releases page.
2. Download the forge installer from [here](https://files.minecraftforge.net/net/minecraftforge/forge/index_1.20.1.html).
3. Create a folder for the server (``mkdir MonifactoryServer``, name doesnt matter)
4. Move the server.zip and forge installer into your server directory. The rest of the guide assumes your current directory is the server directory.
5. Run the forge installer and install the forge server, this can be done with the command ``java -jar TheForgeInstallerName.jar --installServer``
6. ``unzip server.zip``
7. Move the contents of the overrides folder (from server.zip) into the server directory, this can be done with the command ``mv overrides/* .``
8. Use ``./run.sh`` to generate the eula.txt, then again after you accepted run it again to start the server. Modifying the server.properties file to change the port may be neccesary.

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

**Q. Solar boilers do not work in the void dimension**

Known issue (https://github.com/GregTechCEu/GregTech-Modern/issues/1682)

**Q. My issue isn't listed above**

https://discord.gg/N8b2JEfAqb

## Contributing to Monifactory
<!-- Todo -->

##
