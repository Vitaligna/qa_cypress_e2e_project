export class PageObject {
  visit(path = '/') {
    cy.visit(path);
  }

  getByQa(selector) {
    return cy.get(`[data-qa="${selector}"]`);
  }

  typeByQa(selector, text) {
    this.getByQa(selector).clear().type(text);
  }

  clickByQa(selector) {
    this.getByQa(selector).click();
  }
}
