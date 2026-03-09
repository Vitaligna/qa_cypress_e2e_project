/// <reference types='cypress' />
/// <reference types='../support' />

import { faker } from '@faker-js/faker';

describe('Article flow', () => {
  beforeEach(() => {
    cy.login('test@test.com', '123456');
  });

  it('create article', () => {
    const title = faker.lorem.sentence();
    const description = faker.lorem.sentence();
    const body = faker.lorem.paragraph();

    cy.get('[data-qa="new-article"]').click();

    cy.get('[data-qa="article-title"]').type(title);
    cy.get('[data-qa="article-description"]').type(description);
    cy.get('[data-qa="article-body"]').type(body);

    cy.get('[data-qa="article-publish"]').click();

    cy.contains(title).should('exist');
  });

  it('edit article', () => {
    cy.contains('Edit Article').click();

    const newTitle = faker.lorem.sentence();

    cy.get('[data-qa="article-title"]').clear().type(newTitle);

    cy.get('[data-qa="article-publish"]').click();

    cy.contains(newTitle).should('exist');
  });

  it('delete article', () => {
    cy.contains('Delete Article').click();

    cy.contains('Global Feed').should('exist');
  });
});
