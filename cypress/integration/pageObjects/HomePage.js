class HomePage {
  getEditBox() {
    return cy.get("input[name='name']:nth-child(2)");
  }

  getTwoWayDataBinding() {
    return cy.get("input[name='name']:nth-child(1)");
  }

  getGender() {
    return cy.get("select");
  }

  getEntrepreneaurRadioButton() {
    return cy.get("#inlineRadio3");
  }

  getShopTab() {
    return cy.get(":nth-child(2) > .nav-link");
  }
}

const instance = new HomePage();
export { instance as HomePage };
