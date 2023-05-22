describe('Some elements may appear after client-side time consuming JavaScript calculations', ()=>{
    it('wait for the client side delay', ()=>{
        cy.visit('http://uitestingplayground.com/clientdelay');
        cy.get('.btn-primary').click();
        cy.get('.bg-success', {timeout: 20000})
            .should('be.visible')
            .and('contain','Data calculated on the client side.');
    })
})