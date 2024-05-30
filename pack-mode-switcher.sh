#!/usr/bin/env sh

# Colors
RED=$(tput setaf 1)
GREEN=$(tput setaf 2)
YELLOW=$(tput setaf 3)
POWDER_BLUE=$(tput setaf 153)
MAGENTA=$(tput setaf 5)
NORMAL=$(tput sgr0)

touch .mode
set -e
printf "${POWDER_BLUE}Monifactory | Pack Mode Switcher${NORMAL}"

NORMAL_CFG='./config-overrides/normal'
HARDMODE_CFG='./config-overrides/hardmode'
HARDER_CFG='./config-overrides/harder'
TARGET='./config'
CURRENT_MODE="$(head .mode)"
CURRENT_MODE=${CURRENT_MODE:="normal"}

# Check if config-overrides dir exists
if [[ ! -d "${NORMAL_CFG}" ]] || [[ ! -d "${HARDMODE_CFG}" ]] || [[ ! -d "${HARDER_CFG}" ]] ; then
  printf "\n\n${RED}Could not find \`config-overrides\` directory! \nMake sure you are in the \`/minecraft\` directory of your instance! (The one containing \`/config\`)${NORMAL}\n"
  printf "${YELLOW}Otherwise, if you are in the \`/minecraft\` directory, please try reinstalling the pack.${NORMAL}\n"
  exit 1
fi

# Capitalise First Letter (only works in bash 4+)
[ "${BASH_VERSINFO:-0}" -ge 4 ] && CURRENT_MODE=${CURRENT_MODE^}

printf "\n\n${YELLOW}Current Mode: ${CURRENT_MODE}${NORMAL}\n"

if [ -z "$1" ]; then
  printf "${POWDER_BLUE}Set Pack Mode: [Normal / Hardmode / Harder]: ${NORMAL}"
  read MODE
else
  MODE="$1"
fi

case $MODE in
    N|n|normal|Normal)

    cp -rf "$NORMAL_CFG/." ${TARGET} 

    # Only copy server.properties if it exists.
    if [ -f "server.properties" ]; then
        mv "${TARGET}/server.properties" ./
    else
        rm "${TARGET}/server.properties" || true
    fi

    # Update Mode
    echo normal > .mode
  ;;

  H|h|hardmode|Hardmode)

    cp -rf "$HARDMODE_CFG/." ${TARGET}

    if [ -f "server.properties" ]; then
        mv "${TARGET}/server.properties" ./
    else
        rm "${TARGET}/server.properties" || true
    fi

    # Update Mode
    echo hard > .mode
  ;;

  E|e|harder|Harder)

    cp -rf "$HARDER_CFG/." ${TARGET}

    if [ -f "server.properties" ]; then
        mv "${TARGET}/server.properties" ./
    else
        rm "${TARGET}/server.properties" || true
    fi

    # Update Mode
    echo harder > .mode
  ;;

  *)
    printf "\n${RED}Error: Invalid input ${MODE}!${NORMAL}\n"
    printf "\n${POWDER_BLUE}Accepted Inputs:\n${YELLOW}- [Normal, normal, N, n]\n- [Hardmode, hardmode, H, h]\n- [Harder, harder, E, e]${NORMAL}\n"
    exit 1
  ;;
esac

printf "\n${GREEN}Complete!${NORMAL}\n"
