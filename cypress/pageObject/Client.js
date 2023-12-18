import faker from 'faker';

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
    const birthDate = faker.date.between('1983-01-01', '2003-12-31').toLocaleDateString('en-GB').replace(/\//g, '.');
    this.birthdayField().type(birthDate);
    this.saveButton().click();
  }

}
