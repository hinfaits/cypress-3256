/**
 * https://github.com/cypress-io/cypress/issues/3256
 */
describe('try to repro cypress issue 3256', function () {
    it('should die on an exception', function() {
        // should catch and ignore application exceptions
        Cypress.on('uncaught:exception', (err, runnable) => {
            Cypress.log({name: "Caught exception", message: err.message});
            return false;
        });
        
        Cypress.config('baseUrl', 'http://localhost:3000');
        
        cy.visit('/');
        cy.wait(2000);
    });
});
