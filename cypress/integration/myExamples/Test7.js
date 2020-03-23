/// <reference types="Cypress" />

describe("My First Test3", () => {
  it("Does not do much!", () => {
    cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");

    cy.get("#opentab").then((el, index, list) => {
      const url = el.prop("href");
      cy.visit(url);
    });
  });
});
