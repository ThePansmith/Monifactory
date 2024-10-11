# read optional command line argument into $mode
param([string]$mode)

function RobocopyConfigurationFiles
{
    param([string]$configOverridePath)

    # copy all files, including subdirectories and empty subdirectories, without file list, without directory list
    robocopy $configOverridePath $targetPath /e /nfl /ndl
}

function CopyNormalModeConfigs
{
    Write-Host "Copying normal mode configs..."
    RobocopyConfigurationFiles $normalConfigPath
    "normal" | Out-File $modeFilePath
}

function CopyHardModeConfigs
{
    Write-Host "Copying hard mode configs..."
    RobocopyConfigurationFiles $hardConfigPath
    "hard" | Out-File $modeFilePath
}

function CopyHarderModeConfigs
{
    Write-Host "Copying harder mode configs..."
    RobocopyConfigurationFiles $hardConfigPath
    RobocopyConfigurationFiles $harderConfigPath
    "harder" | Out-File $modeFilePath
}

function GetModeFromUserInput
{
    $availableModes = @(
        [System.Management.Automation.Host.ChoiceDescription]::new("&Normal", "The default Monifactory Mode."),
        [System.Management.Automation.Host.ChoiceDescription]::new("&Hardmode", "A hardmode, more true to greg."),
        [System.Management.Automation.Host.ChoiceDescription]::new("Hard&er", "Is Hardmode not Greggy enough for you? Try this one and cry!")
        )

    $selectedMode = $host.UI.PromptForChoice("Set Pack Mode", "Set Pack Mode:", $availableModes, 0)

    switch ($selectedMode)
    {
        0 { CopyNormalModeConfigs }
        1 { CopyHardModeConfigs }
        2 { CopyHarderModeConfigs }
    }
}

Write-Host "Monifactory Pack Mode Switcher"

$normalConfigPath = Join-Path $PSScriptRoot "config-overrides\normal"
$hardConfigPath = Join-Path $PSScriptRoot "config-overrides\hardmode"
$harderConfigPath = Join-Path $PSScriptRoot "config-overrides\harder"
$targetPath = Join-Path $PSScriptRoot "config"
$serverPropertiesPath = Join-Path $PSScriptRoot "server.properties"
$serverPropertiesInConfigPath = Join-Path $targetPath "server.properties"
$modeFilePath = Join-Path $PSScriptRoot ".mode"

switch -Regex ($mode)
{
    "N|Normal" { CopyNormalModeConfigs }
    "H|Hard" { CopyHardModeConfigs }
    "E|Expert|Harder" { CopyHarderModeConfigs }
    default { GetModeFromUserInput }
}

# If server.properties exists, update server config
if (Test-Path $serverPropertiesPath)
{
    Move-Item $serverPropertiesInConfigPath $PSScriptRoot
}

# if server.properties is left over in the config path, remove it
if (Test-Path $serverPropertiesInConfigPath)
{
    Remove-Item $serverPropertiesInConfigPath
}

Write-Host "Switch completed"

if ($mode -eq "")
{
    Read-Host "Press any key to continue"
}