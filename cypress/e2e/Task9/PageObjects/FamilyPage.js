export default class FamilyPage{
    constructor(url){
        this.url = url
        this.title = "FamilyPage"
    }

    getIncome(){
        return cy.get('span.h3.mb-0')
    }

    getResidence(){
        return cy.get('h5')
    }

    visitTheFamily(){
        cy.get('.btn.mt-3').click();
        return cy.url();
    }
}