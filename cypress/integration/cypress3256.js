/**
 * https://github.com/cypress-io/cypress/issues/3256
 */
describe('try to repro cypress issue 3256', function () {
    it('should die on an exception', function() {
        
        // should catch and ignore application exceptions
        Cypress.on('uncaught:exception', (err, runnable) => {
            Cypress.log({name: err.name, message: err.message});
            return false;
        });
        
        Cypress.config('baseUrl', 'http://localhost:3000');
        
        cy.visit('/');
        expect(1).to.equal(1);
        cy.clearLocalStorage();
        cy.reload();
        cy.wait(2000);

        cy.contains('a', 'Create New Note').click();
        cy.get('[name=title]').type('note title');
        cy.get('[name=author]').type('note author');
        cy.get('[name=description]').type('Lorem ipsum dolor sit amet');
        cy.contains('button', 'Save').click();
        cy.wait(10000);

        
    })
});
