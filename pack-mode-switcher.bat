@echo off
color 9
echo Monifactory Pack Mode Switcher
echo Details on each mode can be found on the Curseforge Page
setlocal
set normalCfgPath=%~dp0config-overrides\normal
set hardCfgPath=%~dp0config-overrides\hardmode
set expertCfgPath=%~dp0config-overrides\expert
set targetPath=%~dp0config

rem handle cmdline args
if "%1"=="N" goto copyNormal
if "%1"=="H" goto copyHard
if "%1"=="E" goto copyExpert

rem handle the case where no parameter is supplied
if [%1]==[] goto getChoice

rem handle the case where an invalid parameter is supplied
echo Incorrect parameter! Supply N, H, E, or none at all.
exit 1

:getChoice
echo Set pack mode:
echo N: Normal    (The Default mode)
echo H: Hardmode  (Adds more lines and progression, removes HNN and Monicoin spending)
echo E: Expert    (A modifier for Hardmode, enables some of the more extreme GTm settings among other things)
choice /c NHE /m "Selection:"

if "%errorlevel%" == "1" goto copyNormal
if "%errorlevel%" == "2" goto copyHard
if "%errorlevel%" == "3" goto copyExpert

:copyNormal
robocopy "%normalCfgPath%" "%targetPath%" *.* /e /nfl /ndl

rem If server.properties exists, update server config
IF EXIST server.properties (move "%targetPath%\server.properties" .\)
echo normal > .mode
goto end

:copyHard
robocopy "%hardCfgPath%" "%targetPath%" *.* /e /nfl /ndl

rem If server.properties exists, update server config
IF EXIST server.properties (move "%targetPath%\server.properties" .\)
echo hard > .mode
goto end

:copyExpert
robocopy "%hardCfgPath%" "%targetPath%" *.* /e /nfl /ndl
robocopy "%expertCfgPath%" "%targetPath%" *.* /e /nfl /ndl

rem If server.properties exists, update server config
IF EXIST server.properties (move "%targetPath%\server.properties" .\)
echo expert > .mode
goto end

:end
rem if server.properties is left over in the config path, remove it
IF EXIST "%targetPath%/server.properties" DEL "%targetPath%\server.properties"
echo Switch completed
rem only pause if the user didn't supply a parameter
if [%1]==[] pause
exit 0