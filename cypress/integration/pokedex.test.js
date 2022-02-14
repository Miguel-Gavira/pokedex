const cy = require("cypress");

describe('navigate ans click one pokemon', () => {
    beforeEach(() => {
        cy.viewport(1200, 800);
        cy.visit('/');
    })
    it('pulsamos en el primero y vamos a una url', () => {
        cy.get('li').contains('Bulbasur').click();
        cy.url().should('eq', '/detail/1');
    });
})