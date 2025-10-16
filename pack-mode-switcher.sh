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
  printf "\n%s\n" "${POWDER_BLUE}Monifactory | Pack Mode Switcher Help${NORMAL}"
  printf "\n%s\n" "${YELLOW}Usage: ./pack-mode-switcher.sh [options] [mode]${NORMAL}"
  printf "\n%s\n" "${YELLOW}Options:${NORMAL}"
  printf "%s\n" "${MAGENTA}-s, --silent${NORMAL}      Run in silent mode"
  printf "%s\n" "${MAGENTA}-r, --relative${NORMAL}    Use relative paths (run from current directory instead of script directory)"
  printf "%s\n" "${MAGENTA}-h, --help${NORMAL}        Show this help message and exit"
  printf "\n%s\n" "${YELLOW}Modes:${NORMAL}"
  printf "%s\n" "${MAGENTA}Normal, normal, N, n${NORMAL}     Switch to Normal mode (default)"
  printf "%s\n" "${MAGENTA}Hard, hard, H, h${NORMAL}         Switch to Hard mode"
  printf "%s\n" "${MAGENTA}Expert, expert, E, e${NORMAL}     Switch to Expert mode"
  printf "\n%s\n" "${YELLOW}Example:${NORMAL}"
  printf "%s\n" "${POWDER_BLUE}./pack-mode-switcher.sh -s hard${NORMAL}"
  exit 0
}

print_menu() {
  printf "%s\n" "${POWDER_BLUE}Monifactory | Pack Mode Switcher${NORMAL}"
  printf "\n%s\n" "${YELLOW}Current Mode: ${CURRENT_MODE}${NORMAL}"
  printf "%s\n" "${POWDER_BLUE}Set Pack Mode:"
  printf "%s\n" "${POWDER_BLUE}N: Normal    (The Default mode)"
  printf "%s\n" "${POWDER_BLUE}H: Hardmode  (Adds more lines and progression, removes HNN and Monicoin spending) "
  printf "%s\n" "${POWDER_BLUE}E: Expert    (A modifier for Hardmode, enables some of the more extreme GTm settings among other things)"
  printf "%s" "${POWDER_BLUE}Selection: [Normal / Hardmode / Expert]: "
}

SILENT=false
RUN_DIR="$(dirname "$(realpath "$0")")" # Directory of this script
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
if ! { [ -d "${NORMAL_CFG}" ] && [ -d "${HARDMODE_CFG}" ] && [ -d "${EXPERT_CFG}" ]; }; then
  printf "%s\n%s\n" "${RED}Could not find \`config-overrides\` directory!" "Make sure you are in the \`/minecraft\` directory of your instance! (The one containing \`/config\`)${NORMAL}"
  printf "%s\n" "${YELLOW}Otherwise, if you are in the \`/minecraft\` directory, please try reinstalling the pack.${NORMAL}"
  exit 1
fi

# Get mode interactively
if [ -z "$MODE" ]; then
  if [ -f "$MODEFILE" ]; then
    CURRENT_MODE="$(head "$MODEFILE")"
  fi

  CURRENT_MODE=${CURRENT_MODE:="normal"}

  # Capitalise First Letter (only works in bash 4+)
  if ((BASH_VERSINFO[0] >= 4 )); then
    CURRENT_MODE=${CURRENT_MODE^}
  fi

  if [ -t 0 ]; then
    # Interactive stdin
    if ! $SILENT; then
      print_menu
    fi
    read -r MODE

  else
    # Non interactive stdin
    echo "$CURRENT_MODE"
    exit 0
  fi
fi

# convert to lowercase
MODE=$(echo "$MODE" | tr '[:upper:]' '[:lower:]')
case $MODE in
n | normal)
  cp -rf "$NORMAL_CFG/." "${TARGET}"
  echo normal >"$MODEFILE"
  ;;

h | hard)
  cp -rf "$HARDMODE_CFG/." "${TARGET}"
  echo hard >"$MODEFILE"
  ;;

e | expert)
  cp -rf "$HARDMODE_CFG/." "${TARGET}"
  cp -rf "$EXPERT_CFG/." "${TARGET}"
  echo expert >"$MODEFILE"
  ;;

*)
  printf "\n%s\n" "${RED}Error: Invalid input \"${MODE}\"!${NORMAL}"
  printf "\n%s\n" "${POWDER_BLUE}Accepted Inputs:"
  printf "%s\n" "${YELLOW}- [Normal, normal, N, n]"
  printf "%s\n" "${YELLOW}- [Hard, hard, H, h]"
  printf "%s\n" "${YELLOW}- [Expert, expert, E, e]"
  exit 1
  ;;
esac

if ! $SILENT; then
  printf "\n%s\n" "${GREEN}Successfully switched pack mode to $(cat "$MODEFILE")!${NORMAL}"
fi

exit 0
