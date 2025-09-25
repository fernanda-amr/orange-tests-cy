class DashbardPage{
   
    widgets = [
    'Time at Work',
    'My Actions',
    'Quick Launch',
    'Buzz Latest Posts',
    'Employees on Leave Today',
    'Employee Distribution by Sub Unit'
    ]

   verifyWidgetsVisible(){
     cy.wrap(this.widgets).each((widget) => {
      cy.contains(widget).should('be.visible')
    })
  }

  sidebarModules = [
    {label: 'Admin', path: '/web/index.php/admin/viewSystemUsers'},
    {label: 'PIM', path:'/web/index.php/pim/viewEmployeeList'},
    {label: 'Leave', path:'/web/index.php/leave/viewLeaveList'},
    {label: 'Time', path: '/web/index.php/time/viewEmployeeTimesheet'},
    {label: 'Recruitment', path: '/web/index.php/recruitment/viewCandidates'},
    {label: 'My Info', path: '/web/index.php/pim/viewPersonalDetails/empNumber/7'},
    {label: 'Performance', path: '/web/index.php/performance/searchEvaluatePerformanceReview'},
    {label: 'Dashboard', path: '/web/index.php/dashboard/index'},
    {label: 'Directory', path: '/web/index.php/directory/viewDirectory'},
    {label: 'Claim', path: '/web/index.php/claim/viewAssignClaim'},
    {label: 'Buzz', path: '/web/index.php/buzz/viewBuzz'},
    {label: 'Maintenance', path: '/web/index.php/maintenance/purgeEmployee'}
    
  ]

  checkSidebarNavigation(){
    cy.wrap(this.sidebarModules).each((module) =>{
        cy.contains('aside nav .oxd-main-menu-item--name', module.label).click()
        cy.url().should('include', module.path)
        
    })
  }
 selectors = {
    quickLaunchCard: '.orangehrm-quick-launch-card',
    recruitmentMenuItem: ':nth-child(8) > .oxd-main-menu-item'
  }
    quickLaunchButtons = [
        {label: 'Assign Leave', path: '/web/index.php/leave/assignLeave'},
        {label: 'Leave List', path: '/web/index.php/leave/viewLeaveList'},
        {label: 'Timesheets', path: '/web/index.php/time/viewEmployeeTimesheet'},
        {label: 'Apply Leave', path: '/web/index.php/leave/applyLeave'},
        {label: 'My Leave', path: '/web/index.php/leave/viewMyLeaveList'},
        {label: 'My Timesheet', path: '/web/index.php/time/viewMyTimesheet'}
    ]




    verifyQuickLaunchButtons() {
        this.quickLaunchButtons.forEach(({ label, path }) => {
            cy.contains(this.selectors.quickLaunchCard, label).should('be.visible').click()
            cy.url().should('include', path)
            cy.get(this.selectors.recruitmentMenuItem).click() 

  })
}
  
    selectorsList(){
    const selectors = {
        buttonNavbar: '.bi-caret-down-fill',
        logoutButton: "[href='/web/index.php/auth/logout']"
    }
    return selectors
}

    logout(){
        cy.get(this.selectorsList().buttonNavbar).click()
        cy.get(this.selectorsList().logoutButton).click()
        cy.location('pathname').should('equal', '/web/index.php/auth/login')
    }

}

export default new DashbardPage()
