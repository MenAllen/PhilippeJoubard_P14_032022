# Code base for Project P14 - From JQuery to React
Project Title: "Faites passer une librairie jQuery vers React"
Description: an existing HRnet web app is to be passed to React. This app includes 4 JQuery plugins.
Step 1 : build HRNet React app with the 4 JQuery plugins as components.
Step 2 : Select one of the JQuery plugin, and build a React plugin

## Inputs
 - Frontend static HTML & CSS & JQuery

## Software tools used
 - Visual Studio Code V1.71
 - Node V16
 - React Create App
 - React V1.8 (Router V6.3)
 - React-Redux V8
 - Redux V4
 - @ReduxJS/Toolkit V1
 - Redux-persist V6
 - Bootstrap V5
 - React-Bootstrap V2
 - React-Table
 - ESlint Linter
 - Prettier Code formater
 - Styled-Components
 - P42 code analyser
 - JsDoc
 - Jest


# Getting Started

## Frontend
clone this repo https://github.com/MenAllen/PhilippeJoubard_P14_032022.git
### `npm install`
to install the frontend
### `npm start`
to run the frontend.
### Netlify
App is available from https://sparkling-elf-38d7d4.netlify.app/

# Loading Mocked Data

## Data location
MOCKDATA.json file located src/data with 50 employees.
A file called MOCKDATA1000.json have with 1000 employees is also available, can be used after renaming to MOCKDATA.json
## Data loading
To load the employees from MOCKDATA.json:
1) Navigate to the page 'List Employees'
2) Click on 'Pop' button in the bottom left
3) A modal pops up to indicate table has been populated
4) Note a clear store is performed before each populate, so a second click will not add more employees

## Jsdoc
JSDoc is available in jsdoc directory. Launch index.html (located in jsdoc directory) to vizualize the code documentation.

## Unit & Integration Tests with Jest
'npm run test' to run Jest tests.Launch index.html (located in coverage/lcov-report directory) to vizualize the tests coverage.

## End to End Tests wih cypress
'npx cypress open' will launch cypress interface. Then select 'End to End' test, then choose browser.
Test files are HomeTests.cy.js, CreateEmployee.cy.js, ListEmployess.cy.js & ErrorTest.cy.js.
App URL used: https://sparkling-elf-38d7d4.netlify.app 
