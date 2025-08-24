@echo off
setlocal enabledelayedexpansion

set SILENT=false
set RUN_DIR=%~dp0
set MODE=

rem Iterate though all args
:parse_args
if "%~1"=="" goto after_args
if "%~1"=="-s" set SILENT=true& shift & goto parse_args
if "%~1"=="--silent" set SILENT=true& shift & goto parse_args
if "%~1"=="-r" set RUN_DIR=.\& shift & goto parse_args
if "%~1"=="--relative" set RUN_DIR=.\& shift & goto parse_args
if "%~1"=="-h" goto print_help
if "%~1"=="--help" goto print_help
if not defined MODE set MODE=%~1
shift
goto parse_args

:after_args
set normalCfgPath=%RUN_DIR%config-overrides\normal
set hardCfgPath=%RUN_DIR%config-overrides\hardmode
set expertCfgPath=%RUN_DIR%config-overrides\expert
set targetPath=%RUN_DIR%config

rem Check if config-overrides dirs exist
if not exist "%normalCfgPath%" goto missing_config
if not exist "%hardCfgPath%" goto missing_config
if not exist "%expertCfgPath%" goto missing_config

if not defined MODE (
    if "%SILENT%"=="true" (
        echo Error: No mode specified in silent mode!{#}
        echo Accepted Inputs:
        echo - [Normal, normal, N, n]
        echo - [Hard, hard, H, h]
        echo - [Expert, expert, E, e]
        exit /b 1
    )

    rem Interactive
    color 9

    set CURRENT_MODE="N/A"
    if exist .mode (
        set /p CURRENT_MODE=<.mode
    )

    echo Monifactory ^| Pack Mode Switcher
    echo Current Mode: !CURRENT_MODE!
    echo.
    echo Set Pack Mode:
    echo N: Normal    (The Default mode^)
    echo H: Hard      (Adds more lines and progression, removes HNN and Monicoin spending^)
    echo E: Expert    (A modifier for hard, enables some of the more extreme GTm settings among other things^)
    set /p MODE="Selection [Normal / Hard / Expert]: "
)

rem case insensitive with /i
for %%A in (n normal) do if /i "!MODE!"=="%%A" goto copyNormal
for %%A in (h hard) do if /i "!MODE!"=="%%A" goto copyHard
for %%A in (e expert) do if /i "!MODE!"=="%%A" goto copyExpert

rem if not matched
echo Error: Invalid input "%MODE%"!
echo Accepted Inputs:
echo - [Normal, normal, N, n]
echo - [Hard, hard, H, h]
echo - [Expert, expert, E, e]
exit /b 1


:copyNormal
robocopy "%normalCfgPath%" "%targetPath%" *.* /e /nfl /ndl >nul
echo normal > .mode
goto success

:copyHard
robocopy "%hardCfgPath%" "%targetPath%" *.* /e /nfl /ndl >nul
echo hard > .mode
goto success

:copyExpert
robocopy "%hardCfgPath%" "%targetPath%" *.* /e /nfl /ndl >nul
robocopy "%expertCfgPath%" "%targetPath%" *.* /e /nfl /ndl >nul
echo expert > .mode
goto success


:success
if "%SILENT%"=="false" (
    set /p NEWMODE=<.mode
    echo Successfully switched pack mode to !NEWMODE!
)
exit /b 0


:missing_config
echo Could not find `config-overrides` directory!
echo Make sure you are in the `/minecraft` directory of your instance! (The one containing `/config`)
echo Otherwise, if you are in the `/minecraft` directory, please try reinstalling the pack.
exit /b 1


:print_help
echo.
echo Monifactory ^| Pack Mode Switcher Help
echo.
echo Usage: pack-mode-switcher.bat [options] [mode]
echo.
echo Options:
echo   -s, --silent      Run in silent mode
echo   -r, --relative    Use relative paths (run from current directory instead of script directory)
echo   -h, --help        Show this help message and exit
echo.
echo Modes:
echo   Normal, normal, N, n     Switch to Normal mode (default)
echo   Hard, hard, H, h         Switch to Hard mode
echo   Expert, expert, E, e     Switch to Expert mode (implies Hard mode)
echo.
echo Example:
echo   pack-mode-switcher.bat -s hard
exit /b 0