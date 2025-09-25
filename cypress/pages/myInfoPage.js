class MyInfoPage {
    selectorsList(){
        const selectors = {
            myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
            firstNameField: '.orangehrm-firstname',
            middleNameField: '.orangehrm-middlename',
            lastNameField: '.orangehrm-lastname',
            genericField: '.oxd-input--active',
            dateCloseButton: '.--close',
            genericComboBox: '.oxd-select-text-input',
            nationality: ':nth-child(33) > span',
            marriedStatus: ':nth-child(3) > span',
            singleStatus: ':nth-child(2) > span',
            otherstatus: ':nth-child(4) > span',
            genderRadio: '.oxd-radio-input',
            saveButton: '.oxd-button--secondary',
            messageSaved: '.oxd-toast-container',
            editProfilePicture: '.orangehrm-edit-employee-image',
            addProfilePicture: '.employee-image-action',
            savePictureButton: '.oxd-button'

        }

        return selectors
    }

    accessMyInfo(){
        cy.get(this.selectorsList().myInfoButton).click()
    }
    fillFullName(firstName, middleName, lastName){
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().middleNameField).clear().type(middleName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
    }

    fillPersonalDetails(employeeId, otherId, driversLicenseNumber, licenseExpiryDate, dateOfBirthday){
        cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLicenseNumber)
        cy.get(this.selectorsList().genericField).eq(6).clear().type(licenseExpiryDate)
        cy.get(this.selectorsList().dateCloseButton).click()
        cy.get(this.selectorsList().genericField).eq(7).clear().type(dateOfBirthday)
        cy.get(this.selectorsList().dateCloseButton).click()
    }


    fillNationality(){
        cy.get(this.selectorsList().genericComboBox).eq(0).click()
        cy.get(this.selectorsList().nationality).click()
    }

    fillMaritalStatus(){
        cy.get(this.selectorsList().genericComboBox).eq(1).click()
        cy.get(this.selectorsList().marriedStatus).click()
    }

    fillGender(){
        cy.get(this.selectorsList().genderRadio).eq(0).click()
    }

    savePersonalDetails(){
        cy.get(this.selectorsList().saveButton).eq(0).click()
        cy.get(this.selectorsList().messageSaved).contains('Successfully Updated')
    }

      fillCustomField(bloodType, testField){
        cy.get(this.selectorsList().genericComboBox).eq(2).type(bloodType)
        cy.get(this.selectorsList().genericField).eq(9).clear().type(testField)
    }

    saveCustomField(){
        cy.get(this.selectorsList().saveButton).eq(1).click()
        cy.get(this.selectorsList().messageSaved).contains('Successfully Saved')
    }

    uploadProfilePicture(){
        cy.get(this.selectorsList().editProfilePicture).click()
        cy.get('input[type="file"]').selectFile('./cypress/fixtures/avatar.jpg', {force: true})
        cy.get(this.selectorsList().savePictureButton).click()
        cy.get(this.selectorsList().messageSaved).contains('Successfully Updated')
    }
}

export default new MyInfoPage()