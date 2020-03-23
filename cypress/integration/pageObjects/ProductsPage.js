class ProductsPage {
  getCartCheckoutButton() {
    return cy.get("a.nav-link.btn.btn-primary");
  }

  getPrice() {
    return cy.get("tr td:nth-child(4) strong");
  }

  getTotalPrice() {
    return cy.get("h3 strong");
  }
}

const instance = new ProductsPage();
export { instance as ProductsPage };
