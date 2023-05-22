export default class VisitThisFamilyPage {
    constructor(url){
        this.url = url
        this.title = "VisitThisFamilyPage"
    }

    getName(){
        return cy.get('.col-12.d-none > .d-none')
    }

    getIncome(){
        return cy.get('.h2')
    }

    getResidence(){
        return cy.get('.d-lg-flex > h3')
    }
}