#!/bin/bash

# Here we'll set the command to run, this is using the Netlify CLI using the deploy command. We'll pass in the environment variables for the site and auth token, and have set the output to come through as JSON
# https://cli.netlify.com/commands/deploy
COMMAND="netlify deploy --build --site ${SITE_ID} --auth ${TOKEN} --json"

# Check if the production flag is included
while getopts p: flag
do
	case "${flag}" in
		p) prod=${OPTARG};;
	esac
done

# TODO: Fix prod command
# If this is a production build, add the production flag to the netlify build command
if [ "$prod" = "true" ]; then
	COMMAND="$COMMAND --prod"
fi

# Next we'll run the command, and save the output in another variable so we can access it
OUTPUT=$($COMMAND)

# To parse the output from Netlify, the jq package allows us to fetch the different properties and save them as individual variables.
# https://stedolan.github.io/jq/
NETLIFY_URL=$(jq -r '.deploy_url' <<<"${OUTPUT}")
NETLIFY_LOGS=$(jq -r '.logs' <<<"${OUTPUT}")
DEPLOY_ID=$(jq -r '.deploy_id' <<<"${OUTPUT}")
SITE_NAME=$(jq -r '.site_name' <<<"${OUTPUT}")

# Lastly we'll save the Netlify preview URL as an output parameter for the workflow step, so we can access it in future steps, eg. to add it as a comment on our PR
# https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions#setting-an-output-parameter
echo "NETLIFY_URL=${NETLIFY_URL}" >> $GITHUB_OUTPUT
echo "ENCODED_URL=$(echo $NETLIFY_URL | base64 -w0 | base64 -w0)" >> $GITHUB_OUTPUT