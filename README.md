# HerokuTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.21.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).




//,
    // "node:watch-ts": "tsc -w -p server",
    // "node:lint": "npm run node:build-ts && eslint \"server/**/*.ts\" --quiet --fix",
    // "node:debug": "nodemon -r dotenv/config --inspect=9229 server/dist/index.js",
    // "node:start": "node -r dotenv/config server/dist/index.js",
    // "node-ng:build": "concurrently \"npm run node:build-ts\" \"npm run build\"",
    // "node-ng:debug": "concurrently \"npm run node:debug\" \"npm run start\""
"concurrently \"tsc -p server --watch\" \"nodemon server/dist\""
