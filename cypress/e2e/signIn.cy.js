/// <reference types='cypress' />
/// <reference types='../support' />

import { faker } from '@faker-js/faker';
import signInPage from '../support/pages/signIn.pageObject';

describe('Sign In flow', () => {
  beforeEach(() => {
    cy.task('db:seed');
  });

  it('should login with valid credentials', () => {
    signInPage.visit();

    signInPage.login('test@test.com', '123456');

    cy.contains('Your Feed').should('be.visible');
  });

  it('should show error with invalid credentials', () => {
    signInPage.visit();

    signInPage.login(faker.internet.email(), faker.internet.password());

    cy.contains('email or password is invalid').should('exist');
  });
});
