import FamilyPage from "./PageObjects/FamilyPage";
import LandingPage from "./PageObjects/LandingPage";
import VisitThisFamilyPage from "./PageObjects/VisitThisFamilyPage";



describe('e2e test with Page object model', ()=>{
    it('Select values and compare', ()=>{
        cy.visit('https://www.gapminder.org/dollar-street');
        cy.get('.btn-default').click();
        const ln = new LandingPage();
        ln.changeLeftSlider('44.5')
        ln.changeRightSlider('71')
        const familyIndex = ln.selectRandomFamily();
        const expectedIncome = ln.getIncomeFromTumbnail(familyIndex);
        const fpurl = ln.navigateToFamily(familyIndex)
        const fp = new FamilyPage(fpurl);

        const famIncome = fp.getIncome();
        

        //Compare income between landing page tumbnail and family page
        expectedIncome.invoke('text').then(tIncome=>{
            let cutIndex = tIncome.indexOf('/')
            tIncome = tIncome.substring(0,cutIndex)
            famIncome.invoke('text').then(fIncome =>{
                const vfurl = fp.visitTheFamily()
                const vf = new VisitThisFamilyPage(vfurl)
                vf.getIncome().invoke('text').then(vIncome =>{
                    expect(fIncome,'Income displayed on tumbnail and in family page should match').to.contains(tIncome);
                    expect(vIncome,'Income displayed on family page and visit the family page should match').to.contains(fIncome);
                })
            })
        })
        cy.go('back')
        cy.go('back')
        const expectedResidence = ln.getResidenceFromTumbnail(familyIndex);
        ln.navigateToFamily(familyIndex)
        const famNameAndResidence = fp.getResidence();

        //Compare Country of residence between tumbnail and family page
        expectedResidence.invoke('text').then(tResidence=>{
            famNameAndResidence.invoke('text').then(famInfo=>{
                let cutIndex = famInfo.indexOf(',')
                let fName = famInfo.substring(0,cutIndex)
                let fResidence = famInfo.substring(cutIndex+2)
                const vfurl = fp.visitTheFamily()
                const vf = new VisitThisFamilyPage(vfurl)
                vf.getResidence().invoke('text').then(vResidence =>{
                    vf.getName().invoke('text').then(vName =>{
                        expect(fResidence,'Residence displayed on tumbnail and in family page should match').to.contains(tResidence);
                        expect(vResidence,'Residence displayed on family page and visit the family page should match').to.contains(fResidence);
                        expect(vName,'Family name displayed on family page and visit the family page should match').to.contains(fName)
                    })
                })
            })
        })
    })
})
