describe('Check that class attribute based XPath is well formed', () => {

    it('Find button with btn-primary class', () => {
        cy.visit('http://uitestingplayground.com/classattr');
        //cy.get('.btn-primary').click(); //Finds the object with btn-primary class
        cy.xpath("//button[contains(concat(' ', normalize-space(@class), ' '), ' btn-primary ')]").click();

        cy.on('window:alert', alertWindow => { //cypress handles alerts on it's own to verify the alert the text in the alert window is verified
            expect(alertWindow).to.contains('Primary button pressed');
      })
    })

  })