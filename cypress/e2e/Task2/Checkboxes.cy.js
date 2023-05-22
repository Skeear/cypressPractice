describe('Practice handling checkboxes',()=>{
    it('Check and uncheck option 4', ()=>{
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html');
        cy.get('input[value="option-4"]').check().should('be.checked')

        cy.get('input[value="option-4"]').uncheck().should('be.not.checked')
    })
})