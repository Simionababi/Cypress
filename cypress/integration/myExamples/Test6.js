/// <reference types="Cypress" />

describe("My First Test3", () => {
  it("Does not do much!", () => {
    cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");

    //Handling Mouse hover popus using Cypress
    //cy.get(".mouse-hover-content").invoke("show");
    cy.contains("Top").click({ force: true });
    cy.url().should("include", "top");
  });
});
