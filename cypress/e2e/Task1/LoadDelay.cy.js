describe('Ensure that a test is capable of waiting for a page to load', ()=>{
    it('wait for page to load', ()=>{
        cy.intercept('GET', 'http://uitestingplayground.com/loaddelay').as('loadDelay')
        cy.visit('http://uitestingplayground.com/loaddelay');
        cy.wait('@loadDelay');
        cy.get('.btn').should('be.visible');
    })
})