/// <reference types='cypress' />
/// <reference types='../support' />

import { faker } from '@faker-js/faker';

describe('Settings', () => {
  beforeEach(() => {
    cy.login('test@test.com', '123456');
    cy.visit('/settings');
  });

  it('update bio', () => {
    const bio = faker.lorem.sentence();

    cy.get('[data-qa="settings-bio"]').clear().type(bio);

    cy.get('[data-qa="settings-submit"]').click();

    cy.contains('Your settings have been updated').should('exist');
  });

  it('update username', () => {
    const username = faker.internet.userName();

    cy.get('[data-qa="settings-username"]').clear().type(username);

    cy.get('[data-qa="settings-submit"]').click();

    cy.contains('Your settings have been updated').should('exist');
  });

  it('update email', () => {
    const email = faker.internet.email();

    cy.get('[data-qa="settings-email"]').clear().type(email);

    cy.get('[data-qa="settings-submit"]').click();
  });

  it('update password', () => {
    const password = faker.internet.password();

    cy.get('[data-qa="settings-password"]').type(password);

    cy.get('[data-qa="settings-submit"]').click();
  });
});
