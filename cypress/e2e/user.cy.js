/// <reference types='cypress' />
/// <reference types='../support' />

describe('Follow / Unfollow user', () => {
  beforeEach(() => {
    cy.login('test@test.com', '123456');
  });

  it('follow user', () => {
    cy.visit('/profile/testuser');

    cy.get('[data-qa="follow-btn"]').click();

    cy.contains('Unfollow').should('exist');
  });

  it('unfollow user', () => {
    cy.visit('/profile/testuser');

    cy.get('[data-qa="follow-btn"]').click();

    cy.contains('Follow').should('exist');
  });
});
