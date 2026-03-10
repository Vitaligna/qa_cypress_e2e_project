import PageObject from '../PageObject';

class SettingsPage extends PageObject {
  visit() {
    cy.visit('/settings');
  }

  emailInput() {
    return cy.get('[data-qa="settings-email"]');
  }

  passwordInput() {
    return cy.get('[data-qa="settings-password"]');
  }

  bioInput() {
    return cy.get('[data-qa="settings-bio"]');
  }

  submitButton() {
    return cy.get('[data-qa="settings-submit"]');
  }

  successMessage() {
    return cy.contains('Your settings have been updated');
  }

  updateEmail(email) {
    this.emailInput().clear().type(email);
    this.submitButton().click();
  }

  updatePassword(password) {
    this.passwordInput().clear().type(password);
    this.submitButton().click();
  }

  updateBio(bio) {
    this.bioInput().clear().type(bio);
    this.submitButton().click();
  }
}

export default new SettingsPage();
