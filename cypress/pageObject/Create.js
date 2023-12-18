//import faker from 'faker';

export class Create {
  emailField() {
    return cy.get('input[name="userName"]');
  }

  password() {
    return cy.get('input[name="password"]');
  }

  loginButton() {
    return cy.get('button[type="submit"]');
  }

  addButton() {
    return cy.get('.clients-add-user-dialog.crm-button');
  }
  generateFakeUserData() {
    return {
      email: faker.internet.email(),
      password: faker.internet.password(),
      // Дополнительные поля, которые вы хотите сгенерировать, могут быть добавлены здесь
    };
  }
  doCreate(userData = {}) {
    const { email, password } = userData || this.generateFakeUserData();

    cy.visit('http://167.114.201.175:5000/clients');
    this.emailField().type(email);
    this.password().type(password);
    this.loginButton().click();
    cy.wait(10000);
  }

  clickAddButton() {
    this.addButton().should('be.visible').click();
    // Дополнительные шаги после нажатия кнопки "Добавить клиента"
  }
}
    // addClientButton(){return cy.get('button.clients-add-user-dialog').click();}
    // surnameField(){return cy.get('input[formcontrolname="userSurname"]').type("genger");}
    // nameField(){return cy.get('input[formcontrolname="userName"]').type("germinonf");}
    // genderOption(){return cy.get('mat-radio-group > mat-radio-button:nth-child(2)').click();}
    // emailField(){return cy.get('input[formcontrolname="email"]').type('example@example.com');}
    // phoneField(){return cy.get('input[formcontrolname="phone"]').type('99123456789');}
    // birthdayField(){return cy.get('input[formcontrolname="birthday"]').type('11.03.2000');}
    // saveButton(){return    cy.get('button[name="save"]').click();}