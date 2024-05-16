const user = require('../fixtures/user')

class Login {

    loginElements = {
        emailInput: () => cy.get('input[id="identification"]'),
        passwordInput: () => cy.get('input[id="password"]'),
        signinButton: () => cy.get('button[type="submit"]'),
        checkUrl: () => cy.url().should('contains', '/dashboard')
    }

    writeEmail = () => {
        this.loginElements.emailInput().type(user.email);
        cy.wait(500);
    }

    writePassword =  () => {
        this.loginElements.passwordInput().type(user.password);
        cy.wait(500);
    }

    signin =  () => {
        this.loginElements.signinButton().click();
        cy.wait(500);
    }

    signinEvent = () => {
        this.writeEmail();
        this.writePassword();
        this.signin();
    }
}

export default new Login();