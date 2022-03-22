## Architecture
Model-View-ViewModel (MVVM) is a software design pattern that is structured to separate program logic and user interface controls.
It guides the structure and design of your code to help you achieve “Separation of Concerns.”
Like many other design patterns, MVVM helps organize code and break programs into modules to make development, updating and reuse of code simpler and faster. The pattern is often used in Windows and web graphics presentation software.

The obvious purpose of MVVM pattern is abstraction of the View which reduces the amount of business logic in code-behind. However, following are some other solid advantages −

 - The ViewModel is easier to unit test than code-behind or event-driven code.
 - You can test it without awkward UI automation and interaction.
 - The presentation layer and the logic is loosely coupled.

We choose MVVM: Model, View, ViewModel because this architecture insures these non-functional needs : 

# Maintainability
 - A clean separation of different kinds of code should make it easier to go into one or several of those more granular and focused parts and make changes without worrying.

 - That means you can remain agile and keep moving out to new releases quickly.

# Testability
 - With MVVM each piece of code is more granular and if it is implemented right your external and internal dependences are in separate pieces of code from the parts with the core logic that you would like to test.

 - That makes it a lot easier to write unit tests against a core logic.

 - Make sure it works right when written and keeps working even when things change in maintenance.

# Extensibility
It sometimes overlaps with maintainability, because of the clean separation boundaries and more granular pieces of code.

 - You have a better chance of making any of those parts more reusable.

 - It has also the ability to replace or add new pieces of code that do similar things into the right places in the architecture.


## Why Angular ?
Angular is one of the most popular frameworks that follows this architecture.

Every component has a:

View: HTML file
View Model : the TS file
Model : Ts class

## EvaxApplication

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.4.

## Use cases 
We implemented these two uses cases which are : 
  - Consult vaccination certificate 
  - Display the list of the vaccination centers
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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
