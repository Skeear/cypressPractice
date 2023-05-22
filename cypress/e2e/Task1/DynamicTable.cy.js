describe('Verify cell value in a dynamic table', ()=>{
    it('Chrome process CPU load',()=>{
        cy.visit('http://uitestingplayground.com/dynamictable')
        cy.get('.bg-warning').invoke('text').then(expectedValue =>{
            cy.contains('span','Chrome')
            .siblings('span:contains("%")').invoke('text').then(actualValue =>{
                expect(expectedValue).contains(actualValue);
            })
        })
    })
})