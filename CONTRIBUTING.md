# Contributing Guidelines #

<!-- omit in toc -->
## Table of Contents ##
* [Contributing Guidelines](#contributing-guidelines)
  * [Introduction](#introduction)
  * [What Contributions Are We Seeking?](#what-contributions-are-we-seeking)
  * [Ground Rules](#ground-rules)
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

## Ground Rules ##

The following is a list of ground rules all contributors are expected to follow.
Please do your best to respect these.

* Treat all other individuals with respect.
* Be welcoming to others and understanding that some people who are contributing
  may not be as experienced as others at software development, modding, and mod
  pack development.
* Ensure all changes follow the rules laid out in the
  [.editorconfig](.editorconfig) file in terms of formatting.
* Keep changes on-topic as much as possible.
  * For example, if you are changing a quest do not go changing some recipes
    unless those recipes changes are related to the quest change.

## Getting Started ##

To begin making contributions to this project, you will likely want to create
your own fork of this repository. This can be done via the GitHub web UI. Please
see [this GitHub help article](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo)
for more information.

Once you have forked the repository you may make the changes you want, either in
the web UI or by cloning the repository locally.

After you have made your changes, please create a pull request. Once again, see
[this GitHub help article](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) for
more details.

### Things to Watch Out For ###

One notable thing to watch out for when modifying this mod pack is that we have
multiple difficulty "modes". These modes are located in the `config-overrides`
folder. Some files are copied into these folders and are used to replace files
located in the `config` folder when the `pack-mode-switcher.{sh,bat}` script is
run.

By default this mod pack is set to "normal" difficulty. Please double check that
any files you are working on are do not also exist inside the `config-overrides`
folder. If they do you will need to copy your changes over into them and adjust
them as appropriate for the difficulty setting that folder represents.
