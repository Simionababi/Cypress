/// <reference types="Cypress" />

describe("My First Test3", () => {
  it("Does not do much!", () => {
    cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");

    //Checkboxes, radio buttons are handled the same way
    cy.get("#checkBoxOption1")
      .check()
      .should("be.checked")
      .and("have.value", "option1");
    cy.get("#checkBoxOption1")
      .uncheck()
      .should("not.be.checked");
    cy.get("[type='checkbox']").check(["option2", "option3"]);

    //Dropdowns
    //Static Dropdowns
    cy.get("select")
      .select("option2")
      .should("have.value", "option2");

    //Dynamic dropdowns
    cy.get("#autocomplete").type("ind");
    cy.get(".ui-menu-item div").each((el, index, list) => {
      const optionText = el.text();
      if (optionText === "India") {
        el.click();
      }
    });
    cy.get("#autocomplete").should("have.value", "India");

    //visible, not visible
    cy.get("#displayed-text").should("be.visible");
    cy.get("#hide-textbox").click();
    cy.get("#displayed-text").should("not.be.visible");
    cy.get("#show-textbox").click();
    cy.get("#displayed-text").should("be.visible");

    //radio buttons
    cy.get("[value='radio2']")
      .check()
      .should("be.checked");
  });
});
