#  Testing-e2e
Этот репозиторий содержит E2E-тесты, написанные с использованием Cypress, для сайта-http://167.114.201.175:5000/.
Тест кейсы затрагивают такой функционал как- create и view  клиента на сайте:

#  Как начать
Установка зависимостей
Перед запуском тестов убедитесь, что у вас установлен Node.js. Затем выполните следующие команды в терминале, находясь в корневой папке проекта:
---
---
# Установка
bash
Copy code
npm install
Установка зависимостей из package.json
Убедитесь, что у вас установлены все необходимые зависимости, перечисленные в файле package.json. Если не установлены, выполните следующую команду:

bash
Copy code
npm install
Запуск тестов
Для запуска тестов выполните следующую команду:

bash
Copy code
npm run cypress:run
Примечание: Убедитесь, что приложение запущено и доступно по указанному ваши тестовому окружению.

---
---
# Сами тест кейсы
# Тестовые сценарии
# 1. Тест создания клиента
import faker from 'faker';
import { Login } from "../pageObject/Login";
import { Client } from "../pageObject/Client";

describe('Тест создания клиента', () => {
  const login = new Login();
  const client = new Client();
  const userData = {
    surname: faker.name.lastName(),
    name: faker.name.firstName(),
  };

  it('проходит успешно', () => {
    cy.visit('http://167.114.201.175:5000/');
    login.doLogin();
    client.addClientButton().click();
    client.fillAddClientForm(userData);
  });
};
Получилось так кратко потому что добавил в классы в pageObject-логин и  создание клиентов и просто их вызывал
Что есть в классе создание пользователя - было сделано с помощью с fakerjs- который генерирует данные и moment для того когда выбирал :
import faker from 'faker';
import moment from 'moment';

export class Client {
  addClientButton() { return cy.get('button.clients-add-user-dialog'); }
  surnameField() { return cy.get('input[formcontrolname="userSurname"]'); }
  nameField() { return cy.get('input[formcontrolname="userName"]'); }
  genderOption() { return cy.get('mat-radio-group > mat-radio-button:nth-child(2)'); }
  emailField() { return cy.get('input[formcontrolname="email"]'); }
  phoneField() { return cy.get('input[formcontrolname="phone"]'); }
  birthdayField() { return cy.get('input[formcontrolname="birthday"]'); }
  saveButton() { return cy.get('button[name="save"]'); }

  fillAddClientForm() {
    this.surnameField().type(faker.name.lastName());
    this.nameField().type(faker.name.firstName());
    this.genderOption().click();
    this.emailField().type(faker.internet.email());
    this.phoneField().type(`996${faker.random.number({ min: 100000000, max: 999999999 })}`);
    //this.birthdayField().type(faker.date.past().toLocaleDateString('en-GB').replace(/\//g, '.'));

    // const birthDate = faker.date.between('1983-01-01', '2003-12-31').toLocaleDateString('en-GB').replace(/\//g, '/');
    // this.birthdayField().type(birthDate);

    const birthDate = moment(faker.date.between('1983-01-01', '2003-12-31')).format('MM/DD/YYYY');
    this.birthdayField().type(birthDate);

    this.saveButton().click();
    cy.wait(10000);
  }

}
---
---

# 2. Тест просмотра последнего созданного клиента
javascript
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

---
---
Примечание в краце : стягиваете проект- у вас к этому времени установлен:
-nodejs
-установка зависимостей- скопируйте этот код и подставьте в терминале-npm install.

