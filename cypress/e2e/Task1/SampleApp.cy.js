describe('Demo application with dynamically generated element attributes', ()=>{
    it('log in', ()=>{
        cy.visit('http://uitestingplayground.com/sampleapp');
        cy.get('.form-control[placeholder="User Name"]').type('John Doe');
        cy.get('.form-control[placeholder="********"]').type('pwd');
        cy.get('.btn-primary').click();
        cy.get('.text-success').contains('John Doe');
    })
})