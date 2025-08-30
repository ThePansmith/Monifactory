#!/bin/bash

# Colors
RED=$(tput setaf 1)
GREEN=$(tput setaf 2)
YELLOW=$(tput setaf 3)
POWDER_BLUE=$(tput setaf 153)
MAGENTA=$(tput setaf 5)
NORMAL=$(tput sgr0)

set -e

print_help() {
  printf "\n${POWDER_BLUE}Monifactory | Pack Mode Switcher Help${NORMAL}\n"
  printf "\n${YELLOW}Usage: ./pack-mode-switcher.sh [options] [mode]${NORMAL}\n"
  printf "\n${YELLOW}Options:${NORMAL}\n"
  printf "${MAGENTA}-s, --silent${NORMAL}      Run in silent mode\n"
  printf "${MAGENTA}-r, --relative${NORMAL}    Use relative paths (run from current directory instead of script directory)\n"
  printf "${MAGENTA}-h, --help${NORMAL}        Show this help message and exit\n"
  printf "\n${YELLOW}Modes:${NORMAL}\n"
  printf "${MAGENTA}Normal, normal, N, n${NORMAL}     Switch to Normal mode (default)\n"
  printf "${MAGENTA}Hard, hard, H, h${NORMAL}         Switch to Hard mode\n"
  printf "${MAGENTA}Expert, expert, E, e${NORMAL}     Switch to Expert mode\n"
  printf "\n${YELLOW}Example:${NORMAL}\n"
  printf "${POWDER_BLUE}./pack-mode-switcher.sh -s hard${NORMAL}\n"
  exit 0
}

SILENT=false
RUN_DIR="$(dirname "$(realpath $0)")" # Directory of this script
MODE=""
for arg in "$@"; do
  if [ "$arg" = "--silent" ] || [ "$arg" = "-s" ]; then
    SILENT=true
  elif [ "$arg" = "--relative" ] || [ "$arg" = "-r" ]; then
    RUN_DIR="."
  elif [ "$arg" = "--help" ] || [ "$arg" == "-h" ]; then
    print_help
  elif [ -z "$MODE" ]; then
    MODE="$arg"
  fi
done

NORMAL_CFG="${RUN_DIR}/config-overrides/normal"
HARDMODE_CFG="${RUN_DIR}/config-overrides/hardmode"
EXPERT_CFG="${RUN_DIR}/config-overrides/expert"
TARGET="${RUN_DIR}/config"
MODEFILE="${RUN_DIR}/.mode"

# Check if config-overrides dir exists
if ! ([ -d "${NORMAL_CFG}" ] && [ -d "${HARDMODE_CFG}" ] && [ -d "${EXPERT_CFG}" ]); then
  printf "\n\n${RED}Could not find \`config-overrides\` directory! \nMake sure you are in the \`/minecraft\` directory of your instance! (The one containing \`/config\`)${NORMAL}\n"
  printf "${YELLOW}Otherwise, if you are in the \`/minecraft\` directory, please try reinstalling the pack.${NORMAL}\n"
  exit 1
fi

if [ -z "$MODE" ]; then
  CURRENT_MODE="$(head "$MODEFILE")"
  CURRENT_MODE=${CURRENT_MODE:="normal"}

  # Capitalise First Letter (only works in bash 4+)
  if ((BASH_VERSINFO[0] >= 4 )); then
    CURRENT_MODE=${CURRENT_MODE^}
  fi

  if [ -t 0 ]; then
    # Interactive stdin
    printf "${POWDER_BLUE}Monifactory | Pack Mode Switcher${NORMAL}"
    printf "\n\n${YELLOW}Current Mode: ${CURRENT_MODE}${NORMAL}\n"
    printf "${POWDER_BLUE}Set Pack Mode:\nN: Normal    (The Default mode) \nH: Hardmode  (Adds more lines and progression, removes HNN and Monicoin spending) \nE: Expert    (A modifier for Hardmode, enables some of the more extreme GTm settings among other things) \nSelection: [Normal / Hardmode / Expert]:"
    read MODE
  else
    # Non interactive stdin
    echo $CURRENT_MODE
    exit 0
  fi

  if ! $SILENT; then
    printf "${POWDER_BLUE}Monifactory | Pack Mode Switcher${NORMAL}"
    printf "\n${YELLOW}Current Mode: ${CURRENT_MODE}${NORMAL}\n\n"
    printf "${POWDER_BLUE}Set Pack Mode:\nN: Normal    (The Default mode) \nH: Hard      (Adds more lines and progression, removes HNN and Monicoin spending) \nE: Expert    (A modifier for hard, enables some of the more extreme GTm settings among other things) \nSelection: [Normal / Hard / Expert]: "
  fi

  read MODE
fi

# convert to lowercase
MODE=$(echo "$MODE" | tr '[:upper:]' '[:lower:]')
case $MODE in
  n|normal)
    cp -rf "$NORMAL_CFG/." "${TARGET}"
    echo normal > "$MODEFILE"
  ;;

  h|hard)
    cp -rf "$HARDMODE_CFG/." "${TARGET}"
    echo hard > "$MODEFILE"
  ;;

  e|expert)
    cp -rf "$HARDMODE_CFG/." "${TARGET}"
    cp -rf "$EXPERT_CFG/." "${TARGET}"
    echo expert > "$MODEFILE"
  ;;

  *)
    printf "\n${RED}Error: Invalid input \"${MODE}\"!${NORMAL}\n"
    printf "\n${POWDER_BLUE}Accepted Inputs:\n${YELLOW}- [Normal, normal, N, n]\n- [Hard, hard, H, h]\n- [Expert, expert, E, e]${NORMAL}\n"
    exit 1
  ;;
esac

if ! $SILENT; then
  printf "\n${GREEN}Successfully switched pack mode to $(cat "$MODEFILE")!${NORMAL}\n"
fi

exit 0

