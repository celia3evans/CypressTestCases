///<reference types="cypress" />

const { path } = require("path");
const { dotenv } = require("dotenv");
const { defineConfig } = require("cypress"); // init Cypress data

//const envLocal = dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

module.exports = defineConfig({

  chromeWebSecurity: false, // this is to stop getting cross origin errors (AKA be able to use our login whereas the base URL changes)
  
  defaultCommandTimeout: 15000, // 4 seconds was failing tests on slow load

  // frame size
  viewportHeight: 690,
  viewportWidth: 1300,

  /*
  The following block holds all your Environment variables.

  To add more use this syntax: 'VAR_NAME': 'CONTENTS',

  The known .env file connection techniques like `process.env` can only be used on local servers.
  See reference material below for examples.
  */
  env: {
    'FirstName':'Celia',
    'LastName': 'Evans',
    'Email':'celia.e.evans@gmail.com'
  }, // Can't take environment variables from local .env file for remote servers.

  e2e: {
    excludeSpecPattern: [], // Add spec files you would like to skip over here. Ex: `excludeSpecPattern: ['**/**/specName.cy.js', '**/**/specName.cy.js'],`

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    baseURL: 'https://celiaeevans.wixsite.com/celiaevans',
    
    experimentalStudio: true, // This allows for the Magic Wand tool and other BETA Cypress tools. DO NOT REMOVE
  },
  
});



//============================================================================================================================================
//======== The following is a censored version of past code that Celia Evans wrote for a previous project and was used for reference. ========

// ///<reference types="cypress" />
// import { defineConfig } from 'cypress';
// import * as path from 'path';
// import * as dotenv from 'dotenv'; // necessary package
//
// const envLocal = dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });
//
// export default defineConfig({
//     projectId: 'xxxxxx',
//     chromeWebSecurity: false, // this is to stop getting cross origin errors (AKA be able to use Google Maps for calculations)
//     defaultCommandTimeout: 10000, // 4 seconds was failing tests on slow load
//
//     // TODO these global defaults will need to be overridden when we test screen resizings // add .viewport() in tests when this happens
//     viewportHeight: 750, // not necessary, just really ugly without it
//     viewportWidth: 1500, //  "
//
//     env: process.env, //returns an object with all environment variables from .env.local
//     
//     e2e: {
//         excludeSpecPattern: ['**/**/postShipment.cy.ts', '**/**/requestLogin.cy.ts'], // , '**/**/Shipper-Pagination.cy.ts'
//
//         setupNodeEvents(_on, _config) {
//             // TASKS GO HERE
//             /*_on('file:preprocessor', (file)=>{
//                 //...
//             })*/
//         },
//         baseUrl: process.env.APP_URL,
//         experimentalStudio: true,
//     },
// });