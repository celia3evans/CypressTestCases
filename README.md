# Cypress Automated Testing

This repository holds all of my public, Cypress automated test cases.
Cypress is a UI test case automation tool


## Steps to Start Running Tests for the First Time (in VSCode)

 1. Clone this repository locally.
 2. Open a powershell terminal.
 3. Navigate to `Test-Cases` in the terminal.
 4. Run `npm i cypress` to make sure everything is present/up-to-date.
 5. Navigate to `.\cypress` in the terminal.
 6. Run `node index.js --exec install`. Add `--force` to the end if needed.
 7. Then navigate back to the `Test-Cases\cypress` folder in the terminal.
 8. Run `npx cypress open` and the Cypress GUI should open. 
 9. If you'd prefer running the tests solely in the terminal, run `npx cypress run`.


## Commands to Run Tests

### `npx cypress open`
- This command runs the Cypress tests using the Cypress GUI.
- This method is most beneficial while creating new test cases, because the UI taps into the front end of the application and can grab the tags of each button/text box/item with the click of a button. I have also activated the Beta Experimental Studio which includes a tool which records the clicks we make on the website and writes test case code automatically! (It's not always perfect, but it's easily fixable)
- This method is also beneficial for debugging failed test cases, because it let's you see exactly what's happening in the application's UI, displays all the backend calls palatably and shows exactly what is failing.

### `npx cypress run`
- This command runs the Cypress tests "face-lessly" and creates a result report in the terminal.
- This method is best used for QA regression testing. Cypress will list out all passing and failing regression test cases in a matter of minutes, which would take us hours manually.
- This method also saves a video of each failing test case when run. This video can easily be added to a ticket for the devs.


## Creating New Test Cases

### Version 1, Within VSCode:
 1. Navigate to `Test-Cases\cypress\e2e`.
 2. Create a new file with this extension: `**.cy.js`
 3. Paste the following into the file:

    describe('Test Case Group Name', () => {    // Describe this test case group within the String
        it('Individual Test Case Name', () => { // Name the individual test case.
            cy.visit(Cypress.env('___URL'));    // Ex: stageURL. Exists for each URL (See `aptixAR-QA\Cypress_Files\cypress\cypress.config.js`)
            // ... add more steps here
        })
        // ... add more test cases here
    })

 4. Continue writing code for your test case. 
    (See Cypress official docs for commands: https://docs.cypress.io/api/table-of-contents)
    (Search through Cypress GUI or front end files for asset tags.)

### Version 2, Within Cypress GUI:
 1. Navigate to the `Test-Cases` folder in the terminal.
 2. Run `npx cypress open`.
 3. Click **E2E Testing**. Then click "Continue" if it shows the config files.
 4. Make sure your browser is selected and then click **Start E2E Testing in *browser*** and wait until the GUI loads.
 5. Click the **+ New Spec** button on the left of the window.
 6. Select **Create New Spec**.
 7. Name your file where prompted and click **Okay, run the spec**. 
 8. Let the page load and the test run.
 9. Hover your mouse over the "template spec" title in the step column. See the tiny "Magic Wand" appear to the right of the title.
 10. Click on the **Magic Wand**.
 11. Enter the base URL of the environment you wish to test where prompted.
 12. Click through our application's window doing whatever you wish the code to check or click.
 13. When satisfied, click **Save Commands** in the bottom of the steps column.
 14. Find your new spec file in `Test-Cases\cypress\e2e`.
 15. Open the file in a text editor to fix/add/change anything, such as correcting to use env variables, adding more in depth assertions, or guaranteeing the tag choice is solid.

## Misc Notes

 - The terminal you use to call the Cypress run/open commands must stay open during use to function.
