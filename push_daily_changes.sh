#!/bin/bash

# List all your repos
repos=("repo1" "repo2" "repo3" "repo4")

# Loop through each repo
for repo in "${repos[@]}"; do
    echo "Processing repository: $repo"
    cd /path/to/$repo  # Replace with the correct path to your repo

    # Ensure the repo is up-to-date before pushing
    git pull origin main

    # Make any small changes (for example, add a new line to a file or update the README)
    echo "Small update $(date)" >> README.md

    # Stage, commit, and push changes
    git add .
    git commit -m "Automatic daily commit"
    git push origin main

    # Go back to the main directory
    cd ..
done

echo "All repositories updated!"
