describe('Practice handling modals', ()=>{
    it('Multiple modals',()=>{
        cy.visit('https://demo.automationtesting.in/Modals.html');
        cy.get('[href="#myModalMulti"]').click()
    })
})