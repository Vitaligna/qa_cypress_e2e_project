import { faker } from '@faker-js/faker';

describe('Sign Up', () => {
  beforeEach(() => {
    cy.task('db:seed');
    cy.visit('/register');
  });

  it('should register a new user with valid credentials', () => {
    const username = faker.internet.userName();
    const email = faker.internet.email();
    const password = '12345Qwert!';

    cy.get('[data-qa="signup-username"]').type(username);
    cy.get('[data-qa="signup-email"]').type(email);
    cy.get('[data-qa="signup-password"]').type(password);

    cy.get('[data-qa="signup-submit"]').click();

    cy.contains('Your Feed').should('exist');
  });

  it('should show validation error with invalid email', () => {
    const username = faker.internet.userName();
    const password = '12345Qwert!';

    cy.get('[data-qa="signup-username"]').type(username);
    cy.get('[data-qa="signup-email"]').type('invalid-email');
    cy.get('[data-qa="signup-password"]').type(password);

    cy.get('[data-qa="signup-submit"]').click();

    cy.contains('email').should('exist');
  });

  it('should show validation error when password is too short', () => {
    const username = faker.internet.userName();
    const email = faker.internet.email();

    cy.get('[data-qa="signup-username"]').type(username);
    cy.get('[data-qa="signup-email"]').type(email);
    cy.get('[data-qa="signup-password"]').type('123');

    cy.get('[data-qa="signup-submit"]').click();

    cy.contains('password').should('exist');
  });
});
