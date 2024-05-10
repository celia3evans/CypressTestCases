describe('The Button That Does Nothing', () => {

    it('The Main Event', () => {
        cy.visit('https://celiaeevans.wixsite.com/celiaevans');

        cy.get('#comp-ispt8ica6label').click(); // Feedback Page Button

        // Button Clicking
        cy.get('.font_0 > .color_36 > .wixui-rich-text__text'); // scroll to button section
        cy.get('[data-testid="stylablebutton-label"]').click(); // Click the button
        cy.get('[style="font-size:76px;"] > .wixui-rich-text__text').should('be.visible'); // Pop-up should appear
        cy.get('.jardUn > svg > g > path').click(); // Click the X-Button
        cy.get('.font_0 > .color_36 > .wixui-rich-text__text').should('be.visible'); // Pop-up should dissappear

    });
});