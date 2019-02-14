/**
 * https://github.com/cypress-io/cypress/issues/3256
 */
describe('try to repro cypress issue 3256', function () {
    it('should die on an exception', function() {
        
        // move on from app exceptions
        Cypress.on('uncaught:exception', (err, runnable) => {
            Cypress.log({name: err.name, message: err.message});
            return false;
        });
        
        Cypress.config('baseUrl', 'http://localhost:3000');
        
        cy.visit('/');
        expect(1).to.equal(1);

        
    })
});
