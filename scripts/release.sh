#!/usr/bin/env bash

echo "Building project"
yarn build

echo "Generating static html files"
yarn export

echo "Preparing ssh connection"
printf "  - Setup known hosts file [ ]\r"
echo "$KNOWN_HOSTS" >> ~/.ssh/known_hosts
printf "  - Setup known hosts file [x]"

printf "  - Prepare ssh private key [ ]\r"
echo "$PRIVATE_KEY" > ~/.ssh/id_"${PRIVATE_KEY_FORMAT}"
printf "  - Setup known hosts file [x]"


printf "Uploading release"
export SSHPASS=$PRIVATE_KEY_PASSPHRASE
rsync -e "sshpass -e -P assphrase ssh -l $REMOTE_USER" -a ./out/ -P simonkurz.de:"${REMOTE_PATH}"