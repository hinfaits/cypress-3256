# cypress-3256
https://github.com/cypress-io/cypress/issues/3256

## Instructions
Clone this repo, and run these commands from the root directory. Flip the slashes for Windows.
1. `npm ci` install dependencies 
2. `node ./app/server.js` run the application
3. `./node_modules/.bin/cypress  run --headed --no-exit --spec .\cypress\integration\cypress3256.js` run the scipt which reproduces the issue

## Credit

Frontend application built extended from [dperrymorrow/example-backbone-app](https://github.com/dperrymorrow/example-backbone-app).
