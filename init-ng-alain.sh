#!/bin/bash

node -v # install nodejs LTS version, or use nvm switch node version
yarn -v # npm install -g yarn
yarn config set registry https://registry.npmmirror.com
yarn config set sass_binary_site https://npmmirror.com/mirrors/node-sass
ng version # yarn global add @angular/cli

ng new ProjectName --style less --routing --package-manager yarn

cd ProjectName

git init
git add .
git commit -am'Init'

ng add ng-alain