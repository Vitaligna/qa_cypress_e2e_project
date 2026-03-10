import { faker } from '@faker-js/faker';
import settingsPage from '../support/pages/settings.pageObject';

describe('Settings', () => {
  beforeEach(() => {
    cy.task('db:seed');

    cy.register();
    cy.login('riot@qa.team', '12345Qwert!');

    settingsPage.visit();
  });

  it('update bio', () => {
    const bio = faker.lorem.sentence();

    settingsPage.updateBio(bio);

    settingsPage.successMessage().should('exist');
  });

  it('update email', () => {
    const email = faker.internet.email();

    settingsPage.updateEmail(email);

    settingsPage.successMessage().should('exist');
  });

  it('update password', () => {
    const password = 'NewPassword123!';

    settingsPage.updatePassword(password);

    settingsPage.successMessage().should('exist');
  });
});
