#!/usr/bin/env bash

echo "Install npm packages"
yarn install

echo "Build project"
yarn build

echo "Generate static html files"
yarn export

echo "Prepare for publishing"
# This file is necessary to prevent github to any modification
touch ./out/.nojekyll

git clone "$URL" target
cd target
git checkout "$PAGES_BRANCH"

# Remove everything
rm -R ./*
cd ..

# Move html files into gh-pages branch
mv out/ target/

echo "Publish to gh-pages"
cd target
git push