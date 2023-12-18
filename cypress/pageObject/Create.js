import faker from 'faker';

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
