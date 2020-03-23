class CheckoutPage {
  getCountry() {
    return cy.get("#country");
  }

  getSuggestion() {
    return cy.get(".suggestions a");
  }

  getAgreeCheckbox() {
    return cy.get("#checkbox2");
  }

  getPurchaseButton() {
    return cy.get("[type='submit']");
  }

  getCheckoutButton() {
    return cy.get(".btn.btn-success[type='button']");
  }

  getSuccessMessage() {
    return cy.get(".alert:nth-child(1)");
  }
}

const instance = new CheckoutPage();
export { instance as CheckoutPage };
