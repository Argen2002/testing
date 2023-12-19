#  Testing-e2e
Этот репозиторий содержит E2E-тесты, написанные с использованием Cypress, для сайта-http://167.114.201.175:5000/.
Тест кейсы затрагивают такой функционал как- create и view  клиента на сайте:

#  Как начать
Установка зависимостей
Перед запуском тестов убедитесь, что у вас установлен Node.js.Стяните проект -откройте его через(Pycharm,Visual Studio Code) -Затем выполните следующие команды в терминале, находясь в корневой папке проекта:
---
---
# Установка
написать в терминале-     npm install
Установка зависимостей из package.json
Убедитесь, что у вас установлены все необходимые зависимости, перечисленные в файле package.json. Если не установлены, выполните следующую команду:


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


describe('template ', () => {
 const login = new Login();
 const client = new Client();
 const user = {
   surname: faker.name.lastName(),
   name: faker.name.firstName(),
 };


 it('passes', () => {
   cy.visit('http://167.114.201.175:5000/');
   login.doLogin();
   client.addClientButton().click();
   client.fillAddClientForm(user);
 });

Получилось так кратко потому что добавил в классы в pageObject-логин и  создание клиентов и просто их вызывал
Авторизация(pageObject(class))
export class Login{
 emailField() {return cy.get ('input[name="userName" ]');}
 password() {return cy.get ('input[name="password" ]');}
 loginButton() {return cy.get ('button[type="submit"]');}




   doLogin(email="Admin", password="Admin@Navi"){


       cy.visit('http://167.114.201.175:5000/');
       this.emailField().type(email);
       this.password().type(password);
       this.loginButton().click();
       cy.wait(10000);
 }


}


Создание клиента(pageObject(class))
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


 fillAddClientForm(user) {
   this.surnameField().type(user.surname);
   this.nameField().type(user.name);
   this.genderOption().click();
   this.emailField().type(faker.internet.email());
   this.phoneField().type(`996${faker.random.number({ min: 100000000, max: 999999999 })}`);
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
t('view', () => {
 cy.visit('http://167.114.201.175:5000/');
 login.doLogin();


 cy.get('.crm-navigator-table__row.ng-star-inserted').eq(0).click();


 cy.wait(2000);


 // Добавим логирование для отслеживания сгенерированных данных
 cy.get('input[placeholder="Фамилия"]').should('exist').invoke('val').then((actualSurname) => {
 cy.get('input[placeholder="Имя"]').should('exist').invoke('val').then((actualName) => {
   cy.log('Generated Surname:', user.surname);
   cy.log('Generated Name:', user.name);
   cy.log('Actual Surname:', actualSurname);
   cy.log('Actual Name:', actualName);


   // Сравниваем сгенерированные данные с теми, что на странице
   expect(actualSurname).to.equal(user.surname);
   expect(actualName).to.equal(user.name);
 });
});


---
—



Примечание вкратце : копируете себе этот  проект- у вас к этому времени должен быть установлен:
-nodejs
-установка зависимостей- скопируйте этот код и подставьте в терминале-npm install.
-Visual Studio Code/ Pycharm


Как запустить сам проект после того как все скачали и установили
-терминале проекта вы пишите 
pnpm cypress open

Дальше открывается окно сypress
-Нужно выбрать первый E2E Testing 


Дальше идет выбор браузера - советую electron-  

Дальше выбираем нажимаем на сам тест кейс-spec-copy-1



И дальше выполняется сам тест кейс

