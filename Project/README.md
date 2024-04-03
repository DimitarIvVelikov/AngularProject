# Start API

cd API
npm i
npm run start

# Start Project

cd Project
npm i
ng serve

# Project Documentation

This project is a forum for trainers and trainees to interact with each other. The goal is to provide a platform for people to find their best fitting training program or provide excellent training programs as a trainer.

The page has a home that will show the latest programs that were introduced.

There is a catalog for all of the available training programs.

Each program has its own page and for the owner there are edit and delete functions. For guests they can only review the information and for logged in users that are not the owner will have the option to sign up.

There is a profile page that has the option to edit it. It has a list of all created or sign up training programs.

There is a page for the creation of training programs.

All forms have validations with some just being required and other a bit more complicated(emails or imageUrls).

Observables were used to fetch data from the API with the provided Endpoints as in the Rest-Api-Endpoints.md file.

The project is nowhere near being complete but it is finalized for the exam to a point where it can be graded.

The following will present the libraries that are used to create this project.

# FrontEnd

- Angular
- TypeScript
- RxJS
- Font Google Api

# Backend

- NodeJS
- Express
- CookieParser
- Mongoose
- MongoDB
- cors
- JWT token
- Bcrypt

# Project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.12.

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
