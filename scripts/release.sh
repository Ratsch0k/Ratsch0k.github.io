#!/usr/bin/env bash

echo "Building project"
yarn build

echo "Generating static html files"
yarn export

echo "Preparing ssh connection"
echo "Setup known hosts file"
echo "$KNOWN_HOSTS" > ~/.ssh/known_hosts

echo "Prepare ssh private key"
echo "$PRIVATE_KEY" > ~/.ssh/id_"${PRIVATE_KEY_FORMAT}"


echo "Uploading release"
export SSHPASS="$PRIVATE_KEY_PASSPHRASE"
rsync -e -n "sshpass -e -P assphrase ssh -l $REMOTE_USER" -a ./out/ -P simonkurz.de:"${REMOTE_PATH}"