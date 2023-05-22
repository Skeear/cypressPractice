export default class LandingPage {
    constructor(){
        this.url = "https://www.gapminder.org/dollar-street?min=103&max=1949"
        this.title = "DollarStreet"
        cy.intercept('GET','https://api.dollarstreet.org/v1/search/**').as('loaded')
    }

    getLeftSlider(){
        return cy.get('button.Slider_Handle__YniwT:nth-of-type(1)')
    }

    getRightSlider(){
        return cy.get('button.Slider_Handle__YniwT:nth-of-type(2)')
    }

    changeLeftSlider(val){
        this.getLeftSlider().invoke('attr', 'style', `left: ${val}%; position: absolute;`).click();
        cy.wait('@loaded');
    }

    changeRightSlider(val){
        this.getRightSlider().invoke('attr', 'style', `left: ${val}%; position: absolute;`).click();
        cy.wait('@loaded');
    }

   selectRandomFamily(){
    return Math.floor(Math.random() * 10) +1;
   }

   getIncomeFromTumbnail(familyIndex){
    return cy.get(`:nth-child(${familyIndex}) > .btn > .Media_Media__3HV-- >.Media_Label__SWsj_ > span:nth-of-type(1)`)
   };

   getResidenceFromTumbnail(familyIndex){
    return cy.get(`:nth-child(${familyIndex}) > .btn > .Media_Media__3HV-- >.Media_Label__SWsj_ > span:nth-of-type(2)`)
   };

   navigateToFamily(familyIndex){
    cy.get(`:nth-child(${familyIndex}) > .btn > .Media_Media__3HV-- > .Media_Label__SWsj_`).parent().parent().click()
    return cy.url();
   }
} 