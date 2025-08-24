# Monifactory build script

Uses juke from <https://github.com/tgstation/tgstation>


Juke is a Node.js library, [install Node and NPM](https://nodejs.org/en/download) first. Requires Node 20 or later.

Build steps:
- Go to tools/build.
- Run `npm install`.
- Run `node .`; dot required.
- Using Node 19 or below will result in an error like this, go update your Node version to Node 20 or later.
```
import { hash } from "crypto";
         ^^^^
SyntaxError: The requested module 'crypto' does not provide an export named 'hash'
    at ModuleJob._instantiate (node:internal/modules/esm/module_job:124:21)
    at async ModuleJob.run (node:internal/modules/esm/module_job:190:5)
```

The script will skip build steps whose inputs have not changed since the last run.

## Getting list of available targets

You can get a list of all targets that you can build by running the following command:

```sh
node build --help
```
