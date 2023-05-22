describe('Practice with tables',()=>{
    beforeEach(()=>{
        cy.visit('https://cosmocode.io/automation-practice-webtable/');
    })

    it('check table has 196 countries',()=>{
        cy.get('tr  input').should('have.length', 196);
    })

    it('Verify information about Hungary', ()=>{
        //cy.get('td > strong').contains('Hungary').parent().parent().children(':nth-child(3)').should('contain','Budapest');
        cy.contains('td > strong','Hungary').parent().siblings(':nth-of-type(3)').should('contain','Budapest');
        cy.contains('td > strong','Hungary').parent().siblings(':nth-of-type(4)').should('contain','Forint');
        cy.contains('td > strong','Hungary').parent().siblings(':nth-of-type(5)').should('contain','Hungarian');
    })

    it("Select countries you visited and verify that they're checked", ()=>{
        let visitedCountries = ['Hungary','Italy','Spain', 'United Kingdom','Belgium','Ireland','Romania'];
        visitedCountries.forEach(country =>{
            cy.contains('td > strong',`${country}`).parent().siblings(':nth-of-type(1)').children().check().should('be.checked');
        })
    })
})