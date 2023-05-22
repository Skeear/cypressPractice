describe('Follow the progress of a lengthy process and continue upon completion',()=>{
    it('Stop the progress bar at 75%',()=>{
        cy.visit('http://uitestingplayground.com/progressbar');
        let btnStop =  cy.get('.btn-info');
        cy.get('.btn-primary').click();
        cy.get('.progress-bar', { timeout: 30000 }).should('contain','75%');
        //cy.get('.btn-info').click();
        btnStop.click();
        cy.get('.progress-bar').invoke('text').then(text =>{
            expect(text).equals('75%');
        })
    })
})