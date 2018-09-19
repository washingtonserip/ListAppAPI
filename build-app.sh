#!/bin/bash
cd ./front-end && yarn install && yarn run build && http-server ./dist/front-end
