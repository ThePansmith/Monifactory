# Monifactory build script

Uses juke from <https://github.com/tgstation/tgstation>


Juke is a Node.js library, [install Node and NPM](https://nodejs.org/en/download) first.


Build steps (**Requires Node 23 or later**):
- Go to tools/build.
- Run `npm install`.
- Run `node index.ts`.

The script will skip build steps whose inputs have not changed since the last run.

## Getting list of available targets

You can get a list of all targets that you can build by running the following command:

```sh
node build --help
```
