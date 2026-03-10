describe('Article flow', () => {
  beforeEach(() => {
    cy.task('db:seed');

    cy.register('test@test.com', 'testuser', '123456');
    cy.login('test@test.com', '123456');

    cy.visit('/');
  });

  it('create article', () => {
    cy.contains('New Article').click();

    cy.get('[data-qa="article-title"]').type('Test Article');
    cy.get('[data-qa="article-description"]').type('Test Description');
    cy.get('[data-qa="article-body"]').type('Test Body');

    cy.get('[data-qa="article-publish"]').click();

    cy.contains('Test Article').should('exist');
  });

  it('delete article', () => {
    cy.contains('New Article').click();

    cy.get('[data-qa="article-title"]').type('Delete Article');
    cy.get('[data-qa="article-description"]').type('Desc');
    cy.get('[data-qa="article-body"]').type('Body');

    cy.get('[data-qa="article-publish"]').click();

    cy.get('[data-qa="article-delete"]').click();

    cy.contains('Global Feed').should('exist');
  });
});
