describe('Practice handling radio buttons',()=>{
    it('Verify checking different options', ()=>{
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html');
        cy.get('input[value="green"]').check().should('be.checked');
        cy.get('input[value="blue"]').check().should('be.checked');
        cy.get('input[value="green"]').should('not.be.checked');
    })
})