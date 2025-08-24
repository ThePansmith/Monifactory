import shutil
import os
import sys

def log(text: str):
    try:
        if sys.argv[2] != "--no-print":
            print(text)
    except:
        print(text)

log("Monifactory Pack Mode Switcher\nDetails on each mode can be found on the curseforge page")

userInput = None
currentDirectory = os.getcwd()



def copyFiles(sourceDirectory: str, targetDirectory: str):
    #Gets list of files
    files = os.listdir(sourceDirectory)
    for i in range(len(files)):
        
        if not os.path.isdir(os.path.join(sourceDirectory, files[i])):

            log("Copying over " + files[i])
            shutil.copyfile(os.path.join(sourceDirectory, files[i]), os.path.join(targetDirectory, files[i]))
        else:

            log("Entering directory " + files[i])
            copyFiles(os.path.join(sourceDirectory, files[i]), os.path.join(targetDirectory, files[i]))
        

def switchMode(mode: str):
    if mode == "n":
        log("Normal Mode Selected")

        copyFiles(os.path.join(currentDirectory, "config-overrides", "normal"), currentDirectory + "/config")

        with open(".mode", "w") as f:
            f.write("normal")
        return True
    elif mode == "h":
        log("Hard Mode Selected")

        copyFiles(os.path.join(currentDirectory, "config-overrides", "hardmode"), currentDirectory + "/config")
        
        with open(".mode", "w") as f:
            f.write("hard")
        return True
    elif mode == "e":
        log("Expert Mode selected")
        copyFiles(os.path.join(currentDirectory, "config-overrides", "hardmode"), currentDirectory + "/config")
        copyFiles(os.path.join(currentDirectory, "config-overrides", "expert"), currentDirectory + "/config")
        
        with open(".mode", "w") as f:
            f.write("expert")
        return True
    else:
        return False

def askForMode():
    log("Set Pack Mode:")
    log("N: Normal    (The Default mode)")
    log("H: Hardmode  (Adds more lines and progression, removes HNN and Monicoin spending)")
    log("E: Expert    (A modifier for Hardmode, enables some of the more extreme GTm settings among other things)")
    userInput = input("Selection: ")

    if(switchMode(userInput.lower()) == False):
        askForMode()

try:
    # Runs function if a user passes in a letter, if letter doesn't repersent a pack mode just defaults to asking for a mode
    if switchMode(sys.argv[1]) == False:
        askForMode()
except:
    askForMode()






        
