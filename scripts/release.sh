#!/usr/bin/env bash

# Installing libraries
yarn install

echo "Building project"
yarn build

echo "Generating static html files"
yarn export

echo "Preparing ssh connection"
mkdir "$HOME/.ssh"

echo "Setup known hosts file"
touch ~/.ssh/known_hosts
echo "$KNOWN_HOSTS" > ~/.ssh/known_hosts

echo "Prepare ssh private key"
export KEY_PATH="$HOME/.ssh/id_$PRIVATE_KEY_FORMAT"
echo "$PRIVATE_KEY" > "$KEY_PATH"
chmod 600 "$KEY_PATH"


echo "Uploading release"
export SSHPASS="$PRIVATE_KEY_PASSPHRASE"
rsync -n -e "sshpass -e -P assphrase ssh" -a ./out/ $REMOTE_USER@simonkurz.de:"${REMOTE_PATH}"