@echo off
color 9
echo Monifactory Pack Mode Switcher

setlocal
set normalCfgPath=%~dp0config-overrides\normal
set hardCfgPath=%~dp0config-overrides\hardmode
set expertCfgPath=%~dp0config-overrides\expert
set targetPath=%~dp0config

echo Set pack mode:
echo N: Normal
echo H: Hardmode
echo E: Expert
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
pause
exit
