describe('Placing mouse over an element may change DOM and make the element unavailable',()=>{
    it('hover over element and click', ()=>{
        cy.visit('http://uitestingplayground.com/mouseover')
        cy.get('a[title="Click me"]').click();
        cy.get('a[title="Active Link"]').click(); 
        //cy.get('a[title="Click me"]').dblclick();
        cy.get('#clickCount').should('contain', '2');
    })
})