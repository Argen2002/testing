import {Create} from "../pageObject/Create"


describe('template ', () => {
  const create=new Create()

  it('passes', () => {

    create.doCreate();
    // cy.url().should('include','clients');

  })

})



