#!/bin/bash
RED="\033[1;31m"
GREEN="\033[1;32m"
ORANGE="\033[0;33m"
NOCOLOR="\033[0m"

commit_message_file=".git/COMMIT_EDITMSG"

if [ ! -f "$commit_message_file" ]; then
    echo -e "\n${RED}Error: The commit message file '$commit_message_file' not found."
    exit 1
fi

commit_message=$(cat "$commit_message_file")
allowed_pattern="^(feature|chore|fix|docs):.+$"

if [[ ! $commit_message =~ $allowed_pattern ]]; then
    echo -e "\n${RED}Error: Commit message must starts with 'chore:', 'feature:' or 'fix:'"
    exit 1
fi

exit 0
