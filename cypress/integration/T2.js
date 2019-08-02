import LoginPage from '../objects/loginPage';
const loginPage = new LoginPage()

import TimeLogging from '../objects/timeLogging';
const timeLogging = new TimeLogging()

describe('Sourcebooks login', function() {
    const Roles =
    [
        {
            name: "User",
            tabs: '1'
        },
        {
            name: "Team Lead",
            tabs: '2'
        },
        {
            name: "Manager",
            tabs: '5'
        },
        {
            name: "Accountant",
            tabs: '5'
        },
        {
            name: "Admin",
            tabs: '6'
        }
    ];

    Roles.forEach((role) => {
    it('Verify if ${role.name} role can log in with appropriate numbetr of tabs', function () {

        loginPage.visit();
        loginPage.getLoginFieldUser().click({force:true});
        loginPage. getSpecificUserFromDropDown("Greta Ališauskienė").click();
        loginPage.getLoginfieldRole().click({force:true});
        loginPage.getUserRole(`${role.name}`).click();
        loginPage.getSubmitButton().click();
        
        timeLogging.getUrl().should('include', '/time-logging');
        timeLogging.getPageTitle().contains('Timesheets')
        timeLogging.getCalendar().should('be.visible')
        timeLogging.getTileForm().should('be.visible')
        timeLogging.getUserInfoTitles().contains('Greta Ališauskiene');
        timeLogging.getTabsCount().should('have.length', role.tabs);
        timeLogging.assertTodayDate().contains(new Date().getDate());
        timeLogging. getTitleColor(); 
    })
    })
})