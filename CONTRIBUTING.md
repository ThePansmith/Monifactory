<!-- omit in toc -->
# Contributing Guidelines #

<!-- omit in toc -->
## Table of Contents ##
- [Introduction](#introduction)
- [What Contributions Are We Seeking?](#what-contributions-are-we-seeking)
- [Getting Started](#getting-started)
  - [Setting up an instance repository for use in dev](#setting-up-an-instance-repository-for-use-in-dev)
- [Localization](#localization)
- [Things to Watch Out For](#things-to-watch-out-for)
  - [Questbook Highlighting](#questbook-highlighting)
  - [Config Overrides](#config-overrides)
  - [KubeJS Style Guide](#kubejs-style-guide)
  - [Asset \& Data folder Organization](#asset--data-folder-organization)
- [Optional Compats](#optional-compats)
- [Updating Mods](#updating-mods)
  

## Introduction ##

First off, thank you for your interest in contributing to this project! It's
people like you who are helping to make this project even better than it's ever
been before!

These guidelines exist to ensure all developers and contributors are on the same
page and to reduce conflict and friction between everyone working on the
project. Please read, understand, and do your best to follow them when
contributing.

## What Contributions Are We Seeking? ##

We are currently looking for the following kinds of contributions:

* Bug fixes
* Documentation improvements
* Small quality of life improvements
* Spelling/grammar fixes
* Localizations

Specifically, we are not looking for:

* Major changes/features
* Adding/removing core mods to/from the pack

## Getting Started ##

### Setting up an instance repository for use in dev ###
If this is your first time using github, see [here](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo) on how to create a fork and clone it to your desktop.

The following guide was written with prism launcher in mind, see [here](<https://discord.com/channels/914926812948234260/1229929078547550238/1298732957204221965>) for curselauncher instructions.

1. Create a new Monifactory instance from the latest release, in this example, the instance folder will be named Monifactory
2. Open the `instances\Monifactory` folder, take everything contained within it and store it in a temporary folder (`temp`).
3. Clone your fork of the Monifactory repository into `instances\Monifactory`, with the repository's folder being named `minecraft`. (If using the desktop app, see [here](https://github.com/user-attachments/assets/f9de6554-925d-4827-b51c-c7159e6f915f) for an image example.)
4. Once the repo is installed,  go back to your temporary folder and move the files from the `temp` root folder and `temp\minecraft\mods` folder back into the Monifactory folder.
5. Run ``pack-mode-switcher.py`` if your desired mode is Hard mode or Expert Mode.

If you encounter a problem and there have been mod updates since the latest release, you may need to update your mods using the mod manifest file.
1. Look for a file named `manifest.json` in your instance and make a .zip with it inside.
2. Use your launcher to import the zipped manifest as a new pack - this will download a bunch of updated mod .jars from Curseforge.
3. Delete the contents of your instance's `mods` folder, and replace them with the mod .jars that were just downloaded.

Once those files are moved back in place, you should be able to launch the instance as a modpack while also being to commit and pull from it as a repository, saving you tons of time.  Do note that if the modlist changes, you will need to install the applicable mods/updates into your instance. 

## Localization ##
Monifactory supports localization for nearly everything, including the questbook. Our weblate instance can be found [here](https://hosted.weblate.org/engage/monifactory/), and guide for using weblate can be found [here](<https://docs.weblate.org/en/latest/user/translating.html>). The site also has a [minimalist mode](<https://docs.weblate.org/en/latest/user/translating.html#zen-mode>), and supports uploading raw language files, if you prefer other options.

If you wish to add a language for localization, either ask Pansmith to add it, or make a pull request with some translations already done in that language. (Weblate will automatically add lang files for everything upon detecting a new language). Also note that the discord has a thread for Monifactory's Translations in the #moni-dev channel for easy communication with other contributors.

## Things to Watch Out For ##

### Questbook Highlighting ###

| Color  | Info Highlighted |
| ------------- | ------------- |
| Black (0)  | Currently Unused |
| Dark Blue (l)  | Currently Unused  |
| Dark Green (2)  | Currently Unused  |
| Cyan (3)  | Machines & other processing  |
| Red (4)  | Warnings  |
| Dark Purple (5) | Notes about things in Beta  |
| Orange (6) | Items AND fluids  |
| Light Gray (7) | Currently Unused  |
| Gray (8)  | Keyboard/mouse controls  |
| Light Blue (9)  | Content new to Monifactory |
| Lime (A) | RF and EU Power |
| Aqua (B) | Mod names |
| Light Red (C) | HM/EM exclusive info |
| Pink (D) | CWU & Data |
| Yellow (E) | Supplemental Information |
| White (F) | Default text |

### Config Overrides ###

One thing to watch out for when contributing is that we have multiple difficulty "modes".
The files used when changing modes are located in the `config-overrides` folder.
Some files normally located in the `config` folder are there instead,
and only copied over to their normal locations when the `pack-mode-switcher.py` script is run.
An example of this would be the `genesis.snbt` FTBQuests chapter, as it changes almost entirely from mode to mode.
If you want to make a change across all modes, make sure to make the same change to all three overrides.

### KubeJS Style Guide ###
Keeping the KubeJS files clean and easy to read is important for a couple reasons; outside of making fellow contributor's lives easier, it lets people who are new to KubeJS be able to easily reference Monifactory when getting started with learning how to packdev. This might seem like a lot, but if you take a look at how the other files do it, it comes fairly naturally; the list below is a reference in case you are not sure.

1. If you're using VSCode as an editor, open workspace `.vscode/moni.code-workspace` and install [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint). Make sure to install ESLint with [`npm install`](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) in `kubejs` directory beforehand. Copy `.github/hooks` directory into `.git/` as well. This will ensure code quality in the scripts you are writing. 
2. On a similar note, we use `UTF-8` character encoding. This information is visible on the bottom-right if you're using VSCode.
3. Please sprinkle in one-line comments throughout to explain what certain blocks of code do. _Nobody's_ code is self-explanatory.
4. When possible, use a list/array and `forEach` to perform a similar action multiple times. It's more compact and easier to modify that way.
5. Use empty lines to delineate between distinct blocks of code in the same file - one line if the two blocks work together to perform the same function, two otherwise.
6. All mod-focused scripts' filenames should be the same as that mod's namespace. (Visible when viewing item IDs) Furthermore all scripts' filenames should be entirely lowercase.

### Asset & Data folder Organization ###

KubeJS offers a feature to automatically load resource packs & datapacks put into the `kubejs/assets` and `kubejs/data` folders respectively. Like with the above style guide, most of this comes naturally, this just serves as a reference guide when needed.

1. Avoid sub-folders that aren't strictly necessary! For example, the Sculk Energy Core item models should not go into `kubejs/assets/kubejs/models/item/sculk_energy_cores` or similar, they just go into `kubejs/assets/kubejs/models/item`. This may result in folders with many files in them! That is okay. The one exception to this rule are the contents of `kubejs/assets/kubejs/textures`.
2. Keep large lang files organized! one example of where this is necessary is `kubejs/assets/lang/gtceu/en_us.json`. Categories are separated and labelled as best as can be done without comments since JSON has no capacity for them. If you need to add to a large lang file, _find the relevant category and add to the bottom of it_, following the spacing established by other members of that category.
3. Do not include any redundant lang file entries! One thing that used to be a common practice was to copy mods' entire lang files into the directory used to override mods' internal resource packs and _only changing the relevant entries_. This clogs up things with large amounts of useless information.
4. Do not leave any unused files or assets in these folders! One example is how there used to be an entire suite of Draconic Evolution-themed casings before the theming was switched to the Deep Dark instead. Those unused assets were left in the folder for _months_ after the switch. Debug assets such as those in `kubejs\assets\kubejs\textures\block\debug` are exempt.
   
## Optional Compats ##
Optional Compatiblities for mods should be balanced so that they fit naturally in the modpack's progression without overshadowing existing options. For example, an optional compatability should not have wireless be unlocked before it's possible in the base modpack. Optional Compatibilies serve to extend and add additional options, not replace. 

## Updating Mods ##

If you're updating mods, please make sure to test the basic functionality of every mod you're updating.
It's easy to forget, but mod updates can break as many things as they fix - don't let that happen to Moni's updates as well!

PERFORM THOROUGH CHECKS BEFORE UPDATING:
| Mod | Problems that result from updating |
| ------------- | ------------- |
| HammerLib  | Causes datapack errors when loading into existing worlds |
| Solar Flux Reborn  | Depends on an updated HammerLib |
