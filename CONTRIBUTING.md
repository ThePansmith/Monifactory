# Contributing Guidelines #

<!-- omit in toc -->
## Table of Contents ##
* [Contributing Guidelines](#contributing-guidelines)
  * [Introduction](#introduction)
  * [What Contributions Are We Seeking?](#what-contributions-are-we-seeking)
  * [Getting Started](#getting-started)
    * [Setting up an instance repository](#setting-up-an-instance-repository-for-use-in-dev)
  * [Things to Watch Out For](#things-to-watch-out-for)
    * [Questbook Highlighting](#questbook-highlighting)

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

Once those files are moved back in place, you should be able to launch the instance as a modpack while also being to commit and pull from it as a repository, saving you tons of time.  Do note that if the modlist changes, you will need to install the applicable mods/updates into your instance. 



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

One notable thing to watch out for when modifying this mod pack is that we have
multiple difficulty "modes". These modes are located in the `config-overrides`
folder. Some files are copied into these folders and are used to replace files
located in the `config` folder when the `pack-mode-switcher.{sh,bat}` script is
run.

By default this mod pack is set to "normal" difficulty. Please double check that
any files you are working on are do not also exist inside the `config-overrides`
folder. If they do you will need to copy your changes over into them and adjust
them as appropriate for the difficulty setting that folder represents.

### Asset & Data folder Organization ###

KubeJS offers a feature to automatically load resource packs & datapacks put into the `kubejs/assets` and `kubejs/data` folders respectively. These can get messy, so please try to follow the standards set by other items in that folder:
1. Avoid sub-folders that aren't strictly necessary! For example, the Sculk Energy Core item models should not go into `kubejs/assets/kubejs/models/item/sculk_energy_cores` or similar, they just go into `kubejs/assets/kubejs/models/item`. This may result in folders with many files in them! That is okay. The one exception to this rule are the contents of `kubejs/assets/kubejs/textures`.
2. Keep large lang files organized! one example of where this is necessary is `kubejs/assets/lang/gtceu/en_us.json`. Categories are separated and labelled as best as can be done without comments since JSON has no capacity for them. If you need to add to a large lang file, _find the relevant category and add to the bottom of it_, following the spacing established by other members of that category.
3. Do not include any redundant lang file entries! One thing that used to be a common practice was to copy mods' entire lang files into the directory used to override mods' internal resource packs and _only changing the relevant entries_. This clogs up things with large amounts of useless information.
4. Do not leave any unused files or assets in these folders! One example is how there used to be an entire suite of Draconic Evolution-themed casings before the theming was switched to the Deep Dark instead. Those unused assets were left in the folder for _months_ after the switch. Debug assets such as those in `kubejs\assets\kubejs\textures\block\debug` are exempt.

## KubeJS Style Guide ##
Keeping the KubeJS files clean and easy to read is important for a couple reasons; outside of making fellow contributor's lives easier, it lets people who are new to KubeJS be able to easily reference Monifactory when getting started with learning how to packdev. This might seem like a lot, but if you take a look at how the other files do it, it comes fairly naturally; the list below is a reference in case you are not sure.

1. If you're using VSCode as an editor, use its `Format Document` feature before submitting a PR or pushing changes to keep things organized. It can be accessed with the right-click context menu or the keyboard shortcut `Shift+Alt+F`
2. On a similar note, we use `4 Spaces` to indent, `UTF-8` character encoding, and end lines with `CRLF`. This information is visible on the bottom-right if you're using VSCode.
3. Label things with comments! Every file should have a C-style comment at the top explaining what that file does, (Reference existing files if you don't know what that is) and please sprinkle in one-line comments throughout to explain what certain blocks of code do. _Nobody's_ code is self-explanatory.
4. On that note, please add a space between the double line comment and its text to form comments `// like this.`
5. When possible, use a list/array and `forEach` to perform a similar action multiple times. It's more compact and easier to modify that way.
6. Use empty lines to delineate between distinct blocks of code in the same file - one line if the two blocks work together to perform the same function, two otherwise.
7. When dealing with long concatenated method calls or extended lists of parameters, indent any continuations of that statement on a new line, in the same way that one would indent the body of an if statement or for loop.
8. All mod-focused scripts' filenames should be the same as that mod's namespace. (Visible when viewing item IDs) Furthermore all scripts' filenames should be entirely lowercase.
9. For Multiblock pattern builders, always use `@` char for the controller, ` ` (space) for air and `#` for the 'any' predicate.

## Optional Compats ##
Optional Compatiblities for mods should be balanced so that they fit naturally in the modpack's progression without overshadowing existing options. For example, an optional compatability should not have wireless be unlocked before it's possible in the base modpack. Optional Compatibilies serve to extend and add additional options, not replace. 

## Updating Mods ##

If you're updating mods, please make sure to test the basic functionality of every mod you're updating.
It's easy to forget, but mod updates can break as many things as they fix - don't let that happen to Moni's updates as well!

DO NOT UPDATE:
- Crafting Station to 1.20.1-0
- Nuclearcraft: Neoteric
- Not Enough Recipe Book
