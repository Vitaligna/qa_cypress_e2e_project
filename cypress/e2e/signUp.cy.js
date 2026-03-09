/// <reference types='cypress' />
/// <reference types='../support' />

import { faker } from '@faker-js/faker';

describe('Sign Up flow', () => {
  beforeEach(() => {
    cy.visit('/register');
  });

  it('should sign up successfully', () => {
    const username = faker.internet.userName();
    const email = faker.internet.email();
    const password = '123456';

    cy.get('[data-qa="register-username"]').type(username);
    cy.get('[data-qa="register-email"]').type(email);
    cy.get('[data-qa="register-password"]').type(password);

    cy.get('[data-qa="register-submit"]').click();

    cy.contains('Your Feed').should('exist');
  });

  it('should show validation errors', () => {
    cy.get('[data-qa="register-submit"]').click();

    cy.get('.error-messages').should('exist');
  });
});
