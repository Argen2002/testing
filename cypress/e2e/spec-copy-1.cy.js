import faker from 'faker';
import { Login } from "../pageObject/Login";
import { Client } from "../pageObject/Client";

describe('My test suit', () => {
  it('test1', () => {
    const userData = {
      // Генерация данных для создания клиента
      surname: faker.name.lastName(),
      name: faker.name.firstName(),
      // Дополнительные поля, если необходимо
    };

    const login = new Login();
    const client = new Client();

    login.doLogin();
    client.addClientButton().click();
    client.fillAddClientForm(userData);

    cy.url().should('include', 'clients');
  });




it('view', () => {
  const login = new Login();
  cy.visit('http://167.114.201.175:5000/');
  login.doLogin();

  // Увеличим время ожидания до 10 секунд
  cy.get('input[formcontrolname="userSurname"]', { timeout: 10000 }).should('be.visible');

  cy.get('input[formcontrolname="userSurname"]').invoke('val').then((generatedSurname) => {
    cy.get('input[formcontrolname="userName"]').invoke('val').then((generatedName) => {
      // Подождем, пока появится хотя бы один элемент в списке
      cy.get('.crm-navigator-table__item').should('have.length.greaterThan', 0);

      // Кликаем на первого пользователя в списке
      cy.get('.crm-navigator-table__item')
        .first()
        .click();

      // Проверим, что появилась страница пользователя
      cy.url().should('include', '/user-details');

      // Проверим, что отображаются правильные данные на странице пользователя
      cy.get('.crm-navigator-table__item')
        .contains('.crm-navigator-table__date', `${generatedSurname} ${generatedName}`)
        .should('exist');
    });
  });
});







});




















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



