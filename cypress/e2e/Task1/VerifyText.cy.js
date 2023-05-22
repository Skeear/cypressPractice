describe('Finding an element by displayed text has nuances',()=>{
    it('Find object with partial text', ()=>{
        cy.visit('http://uitestingplayground.com/verifytext');
        cy.contains('.bg-primary','Welcome').should('contain','Welcome UserName!');
    })
})