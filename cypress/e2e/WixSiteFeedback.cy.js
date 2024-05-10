describe('Feedback Page of My Wix Site', () => {

    it('Feedback Submission', () => {
        cy.visit('https://celiaeevans.wixsite.com/celiaevans');

        cy.get('#comp-ispt8ica6label').click(); // Feedback Button

        // Submission Attributes
        cy.get('#comp-lw03fy2z > fieldset > [data-testid="radioGroup"] > :nth-child(1) > .GfSSwF > .MnMHAd').click();
        cy.get('#comp-lw03fy2z > fieldset > [data-testid="radioGroup"] > :nth-child(1) > .T277if').check(); // Offer
        cy.get('#comp-lw03fy2n1 > fieldset > [data-testid="radioGroup"] > :nth-child(1) > .GfSSwF > .MnMHAd').click();
        cy.get('#comp-lw03fy2n1 > fieldset > [data-testid="radioGroup"] > :nth-child(1) > .T277if').check(); // Celia is so cool

        cy.get('[aria-label="Very satisfied"] > [data-testid="ratingsIcon"] > div > svg > g > path').click(); // 5 Stars

        cy.get('[data-testid="select-trigger"]').select(1); // Drop Down
        cy.get('#textarea_comp-lw03fy3i2').type("Stop being so funny and cool!"); // Text Response

        cy.get('#input_comp-lw03fy3s2').type( Cypress.env('Email') ); // Email

        cy.get('#comp-lw03fy3z4 > [data-testid="buttonElement"] > .l7_2fn').should('exist'); // Submit triggers Captcha :(

    });

});