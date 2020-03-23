/// <reference types="Cypress" />

describe("My First Test3", () => {
  it("Does not do much!", () => {
    cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");

    //alerts
    cy.get("#alertbtn").click();

    //Window alert
    cy.on("window:alert", str => {
      expect(str).to.equal(
        "Hello , share this practice page and share your knowledge"
      );
    });

    cy.get("[value='Confirm']").click();

    cy.on("window:confirm", str => {
      expect(str).to.equal("Hello , Are you sure you want to confirm?");
    });

    //Handling Child tab with combination of Cypress & Jquery commands
    cy.get("#opentab")
      .invoke("removeAttr", "target")
      .click();

    //retreive url
    cy.url().should("include", "https://www.rahulshettyacademy.com/#/index");

    //Navigate back
    cy.go("back");
    cy.url().should(
      "include",
      "https://www.rahulshettyacademy.com/AutomationPractice/"
    );
  });
});
