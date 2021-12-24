#!/bin/bash

cd ../the-liminal-project
npm run stop
git pull origin master
npm i
npm run start
echo 'app deployed'