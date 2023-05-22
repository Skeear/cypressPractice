describe('Practice sign in process',()=>{
    it('Validate tooltip message',()=>{
        cy.visit('https://demo.automationtesting.in/Register.html');
        cy.get('#eid').trigger('mouseover').then(()=>{
            cy.get('.tooltptext').should('contain','Provide a valid email id for further updates')
        })
    })
})