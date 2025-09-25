import userData from '../fixtures/userData.json'
import { loginPage } from '../pages/loginPage'
import dashboardPage from '../pages/dashboardPage'


describe('OrangeHRM - Dashboard', () => {
 
  beforeEach(() => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    loginPage.checkDashboardPage()
   
  })

  it('should navigate to all main modules from the sidebar', () => {

   dashboardPage.checkSidebarNavigation()

  })

  it('should display all default dashboard widgets', () => {

    dashboardPage.verifyWidgetsVisible()

  })

  it('should allow quick launch buttons to open the correct pages', () => {
    
    dashboardPage.verifyQuickLaunchButtons()

  })

  it('should logout successfully from user menu', () => {

    dashboardPage.logout()
   
  })

})