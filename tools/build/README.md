# Moni-Ceu-Modern build script

Uses juke from <https://github.com/tgstation/tgstation>

- Windows:
  a) Double-click `tools/build/build.bat` to build (will exit as soon as it finishes building).
- Linux:
  a) Run `tools/build/build` from the repository root.

The script will skip build steps whose inputs have not changed since the last run.

## Getting list of available targets

You can get a list of all targets that you can build by running the following command:

```pwsh
tools/build/build --help
```

## Dependencies

- On Windows, install node from <https://nodejs.org/en/download/>
- On Linux, install Node using your package manager or from <https://nodejs.org/en/download/>.
