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