describe('Practice with date pickers',()=>{
    beforeEach(()=>{
        cy.visit('https://demo.automationtesting.in/Datepicker.html');
    })

    it('date picker typing disabled',()=>{
        cy.get('#datepicker1').click();

        const selectYear = year =>{
            cy.get('.ui-datepicker-year').invoke('text').then($year =>{
                if($year==year){
                    return
                }
                else{
                    cy.get('.ui-icon-circle-triangle-w').click();
                }
                selectYear(year)
            })
        }

        const selectMonth = month =>{
            cy.get('.ui-datepicker-month').invoke('text').then($month =>{
                if($month==month){
                    return
                }
                else{
                    cy.get('.ui-icon-circle-triangle-w').click();
                }
                selectMonth(month)
            })
        }

        const selectDay= day =>{
            cy.contains('a',`${day}`).click();
        }
        selectYear('1995');
        selectMonth('January');
        selectDay('31');

        cy.get('#datepicker1').invoke('val').then(text =>{
            expect(text).to.equal('01/31/1995');
        })
    })

    it('date picker typing disabled',()=>{
        cy.get('#datepicker2').type('01/31/1995{enter}').invoke('val').then(text =>{
            expect(text).to.equal('01/31/1995');
        })
    })
})