/// <reference types="Cypress" />

describe("My First Test3", () => {
  it("Does not do much!", () => {
    cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");

    //tables
    cy.get("tr td:nth-child(2)").each((el, index, list) => {
      const cellText = el.text();
      if (cellText.includes("Python")) {
        cy.get("tr td:nth-child(2)")
          .eq(index)
          .next()
          .then(priceEl => {
            const priceText = priceEl.text();
            expect(priceText).to.equal("25");
          });
      }
    });
  });
});
