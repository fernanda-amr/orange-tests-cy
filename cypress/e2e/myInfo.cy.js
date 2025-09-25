import userData from "../fixtures/userData.json"
import { loginPage } from "../pages/loginPage"
import myInfoPage from "../pages/myInfoPage"


describe('OrangeHRM - My Info', () => {

  beforeEach(() => {

    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    loginPage.checkDashboardPage()
    myInfoPage.accessMyInfo()

  })

  it('should update contact details', () => {
    
    myInfoPage.fillFullName('Jannik', 'Gyger', 'Avan')
    myInfoPage.fillPersonalDetails('00', '01', '02', '28-10-2025', '24-05-1999')
    myInfoPage.fillNationality()
    myInfoPage.fillMaritalStatus()
    myInfoPage.savePersonalDetails()
    myInfoPage.fillCustomField('o+', '00')
    myInfoPage.saveCustomField()

  })
   it('should upload profile picture  ', () => {

    myInfoPage.uploadProfilePicture()
  })
})