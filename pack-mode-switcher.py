import shutil
import os
import sys
import argparse

parser = argparse.ArgumentParser()
parser.add_argument("--silent", "-s", help="Removes log outputs from this python script", action="store_true")
parser.add_argument("packmode", help="Represents the letter of the pack mode you want to pick, same as shown running this script using the CLI")
args = parser.parse_args()

def log(text: str):
    if not args.silent:
        print(text)

log("Monifactory Pack Mode Switcher\nDetails on each mode can be found on the curseforge page")

user_input = None
current_directory = sys.path[0]

def copyFiles(source_directory: str, target_directory: str):
    #Gets list of files
    files = os.listdir(source_directory)
    for i in range(len(files)):
        
        if not os.path.isdir(os.path.join(source_directory, files[i])):
            shutil.copyfile(os.path.join(source_directory, files[i]), os.path.join(target_directory, files[i]))
        else:
            copyFiles(os.path.join(source_directory, files[i]), os.path.join(target_directory, files[i]))
        

def switchMode(mode: str):
    if mode == "n":
        copyFiles(os.path.join(current_directory, "config-overrides", "normal"), current_directory + "/config")

        with open(os.path.join(current_directory, ".mode"), "w") as f:
            f.write("normal")
        log("Switch to Normal Mode complete")
        return True
    elif mode == "h":
        

        copyFiles(os.path.join(current_directory, "config-overrides", "hardmode"), current_directory + "/config")
        
        with open(os.path.join(current_directory, ".mode"), "w") as f:
            f.write("hard")
        log("Switch to Hard Mode complete")
        return True
    elif mode == "e":
        copyFiles(os.path.join(current_directory, "config-overrides", "hardmode"), current_directory + "/config")
        copyFiles(os.path.join(current_directory, "config-overrides", "expert"), current_directory + "/config")
        
        with open(os.path.join(current_directory, ".mode"), "w") as f:
            f.write("expert")
        log("Switch to Expert Mode complete")
        return True
    else:
        return False

def askForMode():
    log("Set Pack Mode:")
    log("N: Normal    (The Default mode)")
    log("H: Hardmode  (Adds more lines and progression, removes HNN and Monicoin spending)")
    log("E: Expert    (A modifier for Hardmode, enables some of the more extreme GTm settings among other things)")
    user_input = input("Selection: ")

    if(switchMode(user_input.lower()) == False):
        askForMode()

try:
    # if invalid letter is passed as an argument script just runs like it was ran by double clicking
    if not switchMode(args.packmode.lower()):
        askForMode()
except:
    askForMode()