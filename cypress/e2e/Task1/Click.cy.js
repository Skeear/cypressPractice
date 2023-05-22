describe('Event based click on an element may not always work', ()=>{
    it('simulate physical mouse click', ()=>{
        cy.visit('http://uitestingplayground.com/click');
        cy.get('.btn-primary').trigger('click');
        cy.get('.btn-success')
            .should('have.css', 'background-color')
            .and('be.colored', '#28a745');
    })
})