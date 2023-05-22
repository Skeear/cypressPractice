describe('Practice handling dropdown',()=>{
    it('select a value in dropdown',()=>{
        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html');
        cy.get('#dropdowm-menu-1').select('python')
        .should('have.value','python');
    })
})