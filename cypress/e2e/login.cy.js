import userData from "../fixtures/userData.json"
import { loginPage } from "../pages/loginPage"


describe('OrangeHRM - Login', () => {

  beforeEach(() => {
    loginPage.accessLoginPage()
  })

  it('should log in successfully with valid credentials', () => {
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    loginPage.checkDashboardPage()
  })
   it('should show error for invalid username or password  ', () => {
    loginPage.loginWithUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkAccessInvalid()
  })
  it('should allow the user to request a password reset and display a success message  ', () => {
    loginPage.resetPassord(userData.userSuccess.username)
  })

})