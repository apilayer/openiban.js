#!/bin/bash
npm run build
if [ "${NODE}" = "true" ]; then
  npm run test:node
elif [ "${BROWSER}" = "true" ]; then
  npm run test:browser
fi