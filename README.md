# Quotes

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.2.

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

## Description

this is a Quotes project that allows the user to  create quotes,delete them and stage them out to be voted for.

## Sample application

![alt text](http:///assets/Screenshot from 2018-09-18 15-45-58.png)

## Pupose

A user inputs a favourite quote,the author and the person who submitted it. in the forms inputs.When the user clicks the add quote button the quote is registeredamong the array of quotes already existing.Then the user allows his quote to be voted for and the quote with the highest vote gets highlighted.When the user is done he has the option of deleting th quote by just clicking quote detail where it will toogle the details and the delete button.

## Installations

You need to install
    -curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
     sudo apt-get install -y nodejs (node installation)
    - npm install -g @angular/cli  (angular commandline interface installation)
    -Install watchman
    -npm install -g typescript  (install typescript)

Then run ng new Quotes