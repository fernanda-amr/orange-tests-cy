class LoginPage {
    selectorsList(){
        const selectors = {
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            loginButton: ".orangehrm-login-button",
            wrongCredentialAlert: "[role='alert']",
            loginForgotButton: ".orangehrm-login-forgot-header",
            tittleForgotPassword: ".orangehrm-forgot-password-title",
            resetPasswordButton: ".orangehrm-forgot-password-button--reset",
            dashboardTopBar: ".oxd-topbar-header-breadcrumb-module"

        }

        return selectors
    }

    accessLoginPage(){
        cy.visit('/auth/login')
    }

    loginWithUser(username, password){
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
    }

    checkAccessInvalid(){
        cy.get(this.selectorsList().wrongCredentialAlert)
    }

    checkDashboardPage(){
        cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
        //cy.get(this.selectorsList().dashboardTopBar).contains('Dashboard')
    }

    resetPassord(username){
        cy.get(this.selectorsList().loginForgotButton).click()
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().resetPasswordButton).click()
        cy.contains("Reset Password link sent successfully")
    }

}

export const loginPage = new LoginPage()