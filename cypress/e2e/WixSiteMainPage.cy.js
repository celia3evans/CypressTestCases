describe('Main Page of My Wix Site', () => {

  it('Main Menu Buttons', () => {
    
    cy.visit('https://celiaeevans.wixsite.com/celiaevans');

    // Main Menu Buttons
    cy.get('#comp-ispt8ica0label').click(); // Experience
    cy.get('#mediairm34ucq25 > [data-testid="inline-content"] > [data-testid="mesh-container-content"] > [data-testid="richTextElement"] > .font_5 > .wixui-rich-text__text').should('be.visible'); // title
    cy.get('#comp-ispt8ica1label').click(); // Education
    cy.get('#mediairm34ucq13 > [data-testid="inline-content"] > [data-testid="mesh-container-content"] > [data-testid="richTextElement"] > .font_5 > .wixui-rich-text__text').should('be.visible'); // title
    cy.get('#comp-ispt8ica2label').click(); // Skills
    cy.get('.font_5 > .color_11 > .wixui-rich-text__text').should('be.visible'); // title
    cy.get('#comp-ispt8ica3label').click(); // Side Projects
    cy.get('#mediairm34ucr34 > [data-testid="inline-content"] > [data-testid="mesh-container-content"] > [data-testid="richTextElement"] > .font_5 > .wixui-rich-text__text').should('be.visible'); // title
    cy.get('#comp-ispt8ica4label').click(); // Fun Facts
    cy.get('#bgLayers_comp-lvzwg2j6 > [data-testid="colorUnderlay"]').should('be.visible'); // Panel
    cy.get('#comp-ispt8ica5label').click(); // Contact
    cy.get('.font_5 > .color_19 > .wixui-rich-text__text').should('be.visible'); // title

  });

  it('Contact Form', () => {
    
    cy.visit('https://celiaeevans.wixsite.com/celiaevans');
    cy.get('#comp-ispt8ica5label').click(); // Open Contact Tab
  
    // Text Field Information - From Env Vars
    cy.get('#input_comp-kl67bdm41').type(Cypress.env('FirstName')); 
    cy.get('#input_comp-kl67bdmb2').type(Cypress.env('LastName'));
    cy.get('#input_comp-kl67bdme1').type(Cypress.env('Email'));
    // Text Field - Straight Typing
    cy.get('#textarea_comp-kl67bdmk').type("Awesome website, Celia!");
    
    // Submit
    cy.get('[data-testid="buttonElement"]').should('be.visible'); // Submit button triggers Captcha, Just Check Visibility

  });

  it('Let\'s Chat', () => {
    
    cy.visit('https://celiaeevans.wixsite.com/celiaevans');
    
    cy.get('.nKphmK').click(); // Let's Chat Button
    cy.get('.nKphmK').should('be.visible'); // Is not accessible through Cypress, strange extension?

  });

});