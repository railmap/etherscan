#!/bin/bash
RED="\033[1;31m"
GREEN="\033[1;32m"
ORANGE="\033[0;33m"
NOCOLOR="\033[0m"

branch_name=$(git symbolic-ref --short HEAD)

if [ "$branch_name" == "main" ]; then
    exit 0
fi

allowed_pattern="^(feature|chore|fix|docs)/.*$"

if [[ ! $branch_name =~ $allowed_pattern ]]; then
    echo -e "\n${RED}Error: Branch naming must starts with 'chore/', 'feature/', 'docs/' or 'fix'/"
    echo -e "${ORANGE}Returning to the previous branch..."
    git checkout -
    # git branch -d $branch_name
    exit 1
fi

exit 0