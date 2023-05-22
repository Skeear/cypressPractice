describe('Make element visible to enter text',()=>{
    it('scroll element into view and enter text',()=>{
        cy.visit('http://uitestingplayground.com/overlapped')
        cy.get('#name').scrollIntoView().type('John Doe{enter}')
        cy.get('#name').should('have.value','John Doe');
    })
})