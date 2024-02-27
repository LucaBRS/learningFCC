# ActualAngularTutorial

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


# NOTES


tsconfigfile same as when u do only ts plus some angular related file.... (this compile the ts file)
tsconfig.spec.json here used by unit test that is generated automatically...

package.json all the package used...important are the "script" where is specify where to build start ets
  in devdependency the one that use your code

package-lock.json optional only in small team, large team is essential. lock make sure that all are in the same version, and if u need to update lock need to be update too, otherwise cli fail

karma.config.js is a task runner tu run test...in here change threshold

angular.json info of my workspace

.editorconfig advantage of having it, u can setup local editor basing some setting of other editor...

.browserlist IMPORTANT to see which browser u are supporting so far

## in the src is where is the fun!
  - test.ts used by karma control
  - style.css global style!
  - polyfils.ts IMPORTANT lets recall javasript... typescript can be converted in any js version.. does all the browser support all js version?, polyfils take care of this, and assure that is compatible with older version...
  - main.ts the start... and there is the difference between dev mode and prod mod
  - index.html the main index of the html served to user angular is SPA (single page application)
  - fave.icon the icon of web
  - app where we do write our code



## MONO-REPO(create multiple project same "workspace")
  - deploy multi app form mono-repo



## angular.json: 
  - has projectType, where u do see type of application...
  - sourceRoot there is the src
  - option: outputPath final where to deploy, as for index, main is possible to change but it start form there; the new property is the scss the in-line style, style u can also add like bootstrap etc...

## template engine
we do create a componente with "ng generate component <component name>"
