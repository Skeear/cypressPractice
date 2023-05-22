describe('Look inside Shadow DOM component',()=>{
    it('check element from clipboard', ()=>{
        cy.visit('http://uitestingplayground.com/shadowdom')
        cy.get('#buttonGenerate',{includeShadowDom: true}).click()
        cy.get('#buttonCopy',{includeShadowDom: true}).click()
       /* cy.get('#editField',{includeShadowDom: true}).invoke('val').then(generatedGUID => {
            cy.window().its('navigator.clipboard').invoke('readText').should('equal',generatedGUID)
            })
        */
    })
})