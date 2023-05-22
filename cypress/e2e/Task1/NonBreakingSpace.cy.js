describe('Non-breaking space looks like a normal one on screen. It may lead to confusion when building XPath',()=>{
    it('find button with non-breaking space in name', ()=>{
        cy.visit('http://uitestingplayground.com/nbsp');
        cy.xpath("//button[text()='My\u00a0Button']").should('have.class','btn-primary')
    })
})