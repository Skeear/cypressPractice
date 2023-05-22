describe('Entering text into an edit field may not have effect', ()=>{
    it('The button\'s name is changed',()=>{
        cy.visit('http://uitestingplayground.com/textinput');
        cy.get('.form-control').click();

        cy.get('.form-control').type('New name');
        cy.get('.btn-primary').click();
        
        cy.get('.btn-primary').should('contain','New name');
    })
})