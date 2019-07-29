class TimeLoggingPage {

    urlIncludesCheck(textIncludes) {
        return cy.url().should('include', `${textIncludes}`);
    }

    getPageTitle() {
        return cy.get('.page__title');
    }

    getCalendar() {
        return cy.get('.calendar');
    }

    getLogHoursForm() {
        return cy.get('.tile.form');
    }

    getUserNameTitle() {
        return cy.get('.user-info__title');
    }

    checkNavigationPanelItemNumber() {
        return cy.get('.main-nav').find('li');
    }

    getCalendarDate() {
        return cy.get('.calendar__date');
    }

    checkSelectedNavPanelItemIsBlue() {
        return cy.get('.main-nav__link--active');
    }

    getLogOutButton() {
        
        return cy.get('[id="logout-button"]');
    }

    getNavigationPanelTasks() {
        return cy.get('.main-nav__link' + '[href="/tasks"]');
    }

    getNavigationPanelClients() {
        return cy.get('.main-nav__link' + '[href="/clients"]');
    }

    getNavigationPanelProjects() {
        return cy.get('.main-nav__link' + '[href="/projects"]');
    }

    getNavigationPanelTimeLogging() {
        return cy.get('.main-nav__link' + '[href="/time-logging"]');
    }

    getProjectInputfieldDropdown() {
        return cy.get('[id="react-select-2--value"]');
    }

    getProjectInputfield() {
        return cy.get('.Select-input' + '[aria-expanded="true"]');
    }

    getTaskInputfieldDropdown() {
        return cy.get('[id="react-select-3--value"]');
    }
    getTaskInputfield() {
        return cy.get('.Select-input' + '[aria-expanded="true"]');
    }

    getDescriptionInputfield() {
        return cy.get('[id="timeLoggingForm.notes"]');
    }

    getHoursInputfield() {
        return cy.get('[id="timeLoggingForm.hours"]');
    }

    getLogHoursButton() {
        return cy.get('[type="submit"]').contains("Log Hours");
    }

    checkIfNewRecordAppearedWithCorrectData(description, projectName) {

        cy.get('[col-id="notes"]').within(() => {
             cy.get('.time-list__description').contains(description).should('be.visible');
        })  
        
    }
}

export default TimeLoggingPage;