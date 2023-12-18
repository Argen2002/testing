import {BaseController} from "../api-core/Controllers/BaseController";

describe('create api cliensts ', () => {
    const baseController= new BaseController()
    before(async ()=>{
        await baseController.authorization()


    })


    it('should do create clients successfuly', async() => {
        let clients=await baseController.PostCreate()
        cy.log(clients)
        cy.wrap(clients.FirstName).should('eq', 'Artest');
        cy.wrap(clients.LastName).should('eq', 'Estest');




    })

})