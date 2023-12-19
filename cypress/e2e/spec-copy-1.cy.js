import faker from 'faker';
import { Login } from "../pageObject/Login";
import { Client } from "../pageObject/Client";

describe('template ', () => {
  const login = new Login();
  const client = new Client();
  const userData = {
    surname: faker.name.lastName(),
    name: faker.name.firstName(),
  };

  it('passes', () => {
    cy.visit('http://167.114.201.175:5000/');
    login.doLogin();
    client.addClientButton().click();
    client.fillAddClientForm(userData);
  });




it('view', () => {
  cy.visit('http://167.114.201.175:5000/');
  login.doLogin();

  cy.get('.crm-navigator-table__row.ng-star-inserted').eq(0).click();

  cy.wait(2000);

  cy.get('input[formcontrolname="userSurname"]').should('exist');
  cy.get('input[formcontrolname="userName"]').should('exist');

  cy.get('input[formcontrolname="userSurname"]').invoke('val').then((actualSurname) => {
    cy.get('input[formcontrolname="userName"]').invoke('val').then((actualName) => {
      // Сравнить сгенерированные данные с теми, что на странице
      expect(actualSurname).to.equal(userData.surname);
      expect(actualName).to.equal(userData.name);
    });
  });


 });


 })





















//
// //import {Create} from "../pageObject/Create"
// import {Login} from "../pageObject/Login";
// import {Client} from "../pageObject/Client";
// //import { Search } from "../pageObject/Search";
// import faker from 'faker';
//
//
//
// describe('template ', () => {
//   //const create=new Create()
//   const userData = faker()
//
//   const login =new Login()
//   const client=new Client()
//   //const search = new Search();
//
//
//   it('passes', () => {
//     login.doLogin();
//     client.addClientButton().click();
//
//     client.fillAddClientForm();  });
//
//
//
// // it('view', () => {
// //   const generatedSurname = client.surnameField().invoke('val');
// //   const generatedName = client.nameField().invoke('val');
// //
// //   cy.get('.crm-navigator-table__item').contains('.crm-navigator-table__date', `${generatedSurname} ${generatedName}`).should('exist');
// //
// //
// it('view', () => {
//     const generatedSurname = client.surnameField().invoke('val');
//     const generatedName = client.nameField().invoke('val');
//
//     cy.get('.crm-navigator-table__item').contains('.crm-navigator-table__date', `${generatedSurname} ${generatedName}`).should('exist');
//   });
//
// })



