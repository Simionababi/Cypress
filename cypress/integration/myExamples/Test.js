/// <reference types="Cypress" />

describe("My First Test", () => {
  it("Does not do much!", () => {
    cy.visit("https://www.rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".search-keyword").type("ca");
    cy.wait(2000);
    cy.get("div.product:visible").should("have.length", 4);

    //Alias
    cy.get(".products").as("productsLocator");

    cy.get("@productsLocator")
      .find(".product")
      .should("have.length", 4);

    cy.get("@productsLocator")
      .find(".product")
      .eq(1)
      .contains("ADD TO CART")
      .click();

    cy.get("@productsLocator")
      .find(".product")
      .each(($el, index, $list) => {
        const textVeg = $el.find("h4.product-name").text();
        if (textVeg.includes("Cashew")) {
          $el.find("button").click();
        }
      });

    //assert if the text is correct
    cy.get(".brand").should("have.text", "GREENKART");

    //print in logs, non cypress comands need to resolve the promise
    cy.get(".brand").then(logoElement => {
      cy.log(logoElement.text());
    });
  });
});
