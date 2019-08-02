import LoginPage from  '../objects/loginPage';
import Task from '../objects/task';
var login = new LoginPage();
var task = new Task();


describe('Sourcebooks testLogin with Team Lead role', function(){
    it('TestLogin and checks today day', function() {
        login.visit();
        login.userDropDown().click({force:true});
        login.getUser("Dainius Gaidamavičius").click();
        login.getRoleDropDown().click({force:true});
        login.getRoleOption("Team Lead").click();
        login.getSubmitButton().click();
        cy.url().should('include', '/time-logging');
        login.getPageTitle().contains('Timesheets');
        login.getCalendar().should('be.visible');
        login.getTileForm().should('be.visible');
        login.getUserTitle().contains('Dainius Gaidamavicius');
        login.getMenuList().should('have.length', 2);          
        login.getCalendarSpan().should('contain', new Date().getDate());
    })
})

describe('Sourcebooks Test login with all user roles', function() {
    let Roles = [
        {
            "name": "User",
            "tabs": 1
        },
        {
            "name": "Team Lead",
            "tabs": 2
        },
        {
            "name": "Manager",
            "tabs": 5
        },
        {
            "name": "Accountant",
            "tabs": 5
        }, 
        {
            "name": "Admin",
            "tabs": 6
        }];
    
    for(let i = 0; i < Roles.length; i++){
        it('Verify that ' + Roles[i].name + ' can log in and should see ' + Roles[i].tabs + ' tabs', function(){
        login.visit();
        login.userDropDown().click({force:true});
        login.getUser("Dainius Gaidamavičius").click();
        login.getRoleDropDown().click({force:true});
        login.getRoleOption(Roles[i].name).click();
        login.getSubmitButton().click();
        login.getUserTitle().contains('Dainius Gaidamavicius');
        login.getMenuList().should('have.length', Roles[i].tabs);
        login.getActiveMenuItem().should('have.css','color', 'rgb(64, 76, 237)');         
        })
    } 

})


 