#!/bin/sh
curl https://raw.githubusercontent.com/creationix/nvm/v0.25.0/install.sh | bash
touch ~/.bashrc
source ~/.bashrc
nvm install 8.11.3
npm install -g pm2
npm install
