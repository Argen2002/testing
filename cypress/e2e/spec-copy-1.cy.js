//import {Create} from "../pageObject/Create"
import {Login} from "../pageObject/Login";
import {Client} from "../pageObject/Client";


describe('template ', () => {
  //const create=new Create()
  const login =new Login()
  const client=new Client()


  it('passes', () => {
    login.doLogin();
    client.addClientButton().click();

    client.fillAddClientForm();





    cy.url().should('include','clients');






  })

})



