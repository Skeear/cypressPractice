describe('Some elements may appear on a page after loading data with AJAX request', ()=>{
    it('wait for AJAX request', ()=>{
        cy.intercept('GET','http://uitestingplayground.com/ajaxdata').as('AJAXrequest');
        cy.visit('http://uitestingplayground.com/ajax');
        cy.get('.btn-primary').click();  
        cy.wait('@AJAXrequest');
        cy.get('.bg-success')
            .should('be.visible')
            .and('contain','Data loaded with AJAX get request.');
    })
})