/// <reference types="Cypress" />

describe("My First Test", () => {
  it("Does not do much!", () => {
    cy.visit("https://www.rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".search-keyword").type("ca");
    cy.wait(2000);

    //Alias
    cy.get(".products").as("productsLocator");

    cy.get("@productsLocator")
      .find(".product")
      .each(($el, index, $list) => {
        const textVeg = $el.find("h4.product-name").text();
        if (textVeg.includes("Cashew")) {
          $el.find("button").click();
        }
      });
    cy.get(".cart-icon > img").click();
    //cy.visit("https://www.rahulshettyacademy.com/seleniumPractise/#/cart");
    cy.get(".cart-preview.active")
      .find("button")
      .click();
  });
});
