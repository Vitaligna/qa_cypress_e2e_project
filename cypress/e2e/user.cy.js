describe('User', () => {
  beforeEach(() => {
    cy.task('db:seed');

    cy.register('user1@test.com', 'user1', '123456');
    cy.register('user2@test.com', 'user2', '123456');

    cy.login('user1@test.com', '123456');

    cy.visit('/profile/user2');
  });

  it('should follow user', () => {
    cy.get('[data-qa="follow-btn"]').click();

    cy.get('[data-qa="follow-btn"]').should('contain', 'Unfollow');
  });

  it('should unfollow user', () => {
    cy.get('[data-qa="follow-btn"]').click();

    cy.get('[data-qa="follow-btn"]').should('contain', 'Unfollow');

    cy.get('[data-qa="follow-btn"]').click();

    cy.get('[data-qa="follow-btn"]').should('contain', 'Follow');
  });
});
