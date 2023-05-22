describe('Scrolling an element into view may be a tricky task', ()=>{
    it('Scroll button into a visible area',()=>{
        cy.visit('http://uitestingplayground.com/scrollbars');
        cy.get('.btn-primary').scrollIntoView();
        cy.get('.btn-primary').should('be.visible');
    })
})