# Contributing Guidelines #

<!-- omit in toc -->
## Table of Contents ##
* [Contributing Guidelines](#contributing-guidelines)
  * [Introduction](#introduction)
  * [What Contributions Are We Seeking?](#what-contributions-are-we-seeking)
  * [Getting Started](#getting-started)
    * [Things to Watch Out For](#things-to-watch-out-for)

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

To begin making contributions to this project in the form of Pull Requests, you will need to create
your own **fork** of this repository. This can be done via the GitHub web UI.
Please see [this GitHub help article](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo) for more information.

Once you have created a **fork** of the Monifactory repository you may make the changes you want using that same web UI.
If you want to test those changes, you'll have to make a **clone of that fork** as an instance on your launcher.

To do so, you should follow these steps:
1. Make a new Monifactory instance in your launcher of choice from the latest release.
2. Identify where on your machine that instance is located.
* For those on Prism, it will be in `PrismLauncher/instances/Monifactory`.
* For those on Curseforge, it will be in `curseforge/Instances/Monifactory`.
3. You will need to move some files from this new instance into a temporary directory to be used later.
* For those on Prism, it will be the mod .jars in `PrismLauncher/instances/Monifactory/minecraft/mods`.
* For those on Curseforge, it will be everything in `curseforge/Instances/Monifactory`.
4. Now, you will need to clone your fork into where the instance used to be.
* For those on Prism, delete the `minecraft` folder and clone your fork of Monifactory into `PrismLauncher/instances/Monifactory`. This will create a new folder with the name of your fork - rename that folder to `minecraft`.
* For those on Curseforge, clone your fork of Monifactory into `curseforge/Instances`. This will create a new folder with the name of your fork - feel free to rename this folder to "Monifactory-dev" or similar.
6. At this point, you will need to move some files from the instance back to where they used to be for your launcher to recognize the conglomerate as a valid instance of modded Minecraft.
* For those on Prism, move the .jar files you moved earlier back into `PrismLauncher/instances/Monifactory/minecraft/mods`.
* For those on Curseforge, move the contents you moved earlier back into `curseforge/Instances/Monifactory`. Do NOT replace any files with this action - Keep the ones from the clone instead.
7. At this point, you should now be able to launch this creation as you would any other modpack in your launcher.

If you encounter a problem and there have been mod updates since the latest release, you may need to update your mods using the mod manifest file.
1. Look for a file named `manifest.json` in your instance and make a .zip with it inside.
2. Use your launcher to import the zipped manifest as a new pack - this will download a bunch of updated mod .jars from Curseforge.
3. Move the mod .jars that were just downloaded the `mods` folder of your instance.

At this point, making and testing changes should be far easier. You may also make changes on your local **clone** and "push" those changes back to your **fork**, which can then be turned into a **Pull Request**. 

To create a pull request, see
[this other GitHub help article](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) for
more details.

### Terms: ###
**Fork**: A duplicate of the Monifactory project under your control stored on Github.

**Clone**: A duplicate of a project (In this case, your fork of Monifactory) stored locally.

**Pull Request**: A request for the maintainters of Monifactory to copy the changes you have made on your **fork** into the main project.

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

1. If you're using VSCode as an editor, use its `Format Document` feature before submitting a PR or pushing changes to keep things organized. It can be accessed with the right-click context menu or the keyboard shortcut `Shift+Alt+F`
2. On a similar note, we use `4 Spaces` to indent, `UTF-8` character encoding, and end lines with `CRLF`. This information is visible on the bottom-right if you're using VSCode.
3. Label things with comments! Every file should have a C-style comment at the top explaining what that file does, (Reference existing files if you don't know what that is) and please sprinkle in one-line comments throughout to explain what certain blocks of code do. _Nobody's_ code is self-explanatory.
4. On that note, please add a space between the double line comment and its text to form comments `// like this.`
5. When possible, use a list/array and `forEach` to perform a similar action multiple times. It's more compact and easier to modify that way.
6. Use empty lines to delineate between distinct blocks of code in the same file - one line if the two blocks work together to perform the same function, two otherwise.
7. When dealing with long concatenated method calls or extended lists of parameters, indent any continuations of that statement on a new line, in the same way that one would indent the body of an if statement or for loop.
8. All mod-focused scripts' filenames should be the same as that mod's namespace. (Visible when viewing item IDs) Furthermore all scripts' filenames should be entirely lowercase.
9. For Multiblock pattern builders, always use `@` char for the controller, ` ` (space) for air and `#` for the 'any' predicate.

## Updating Mods ##

If you're updating mods, please make sure to test the basic functionality of every mod you're updating.
It's easy to forget, but mod updates can break as many things as they fix - don't let that happen to Moni's updates as well!

DO NOT UPDATE:
- Crafting Station to 1.20.1-0
- Nuclearcraft: Neoteric
- Not Enough Recipe Book
