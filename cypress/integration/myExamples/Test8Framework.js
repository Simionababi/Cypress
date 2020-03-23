/// <reference types="Cypress" />
import data from "../../fixtures/example.json";
import { HomePage } from "../pageObjects/HomePage";
import { ProductsPage } from "../pageObjects/ProductsPage";
import { CheckoutPage } from "../pageObjects/CheckoutPage";

describe("My Test8", () => {
  it("Does not do much!", () => {
    cy.visit("https://www.rahulshettyacademy.com/angularpractice/");
    //pass data from fixtures
    HomePage.getEditBox().type(data.name);
    HomePage.getGender().select(data.gender);
    HomePage.getTwoWayDataBinding().should("have.value", data.name);
    HomePage.getEditBox().should("have.attr", "minlength", "2");
    HomePage.getEntrepreneaurRadioButton().should("be.disabled");
    HomePage.getShopTab().click();

    data.productName.forEach(productName => {
      cy.selectProduct(productName);
    });
    ProductsPage.getCartCheckoutButton().then(el => {
      expect(el.text()).to.include("( 2 )");
    });

    ProductsPage.getCartCheckoutButton().click();
    var sum = 0;
    ProductsPage.getPrice().each((el, index, list) => {
      const fullText = el.text();
      var splitedText = fullText.split(" ");
      splitedText = parseInt(splitedText[1].trim());
      sum += splitedText;
      cy.log(splitedText);
    });

    ProductsPage.getTotalPrice().then(el => {
      const totalAmountText = el.text();
      var totalAmoutSplited = totalAmountText.split(" ");
      totalAmoutSplited = parseInt(totalAmoutSplited[1].trim());
      cy.log(totalAmoutSplited);
      expect(sum).to.equal(totalAmoutSplited);
    });

    CheckoutPage.getCheckoutButton().click();
    CheckoutPage.getCountry().type(data.country);
    CheckoutPage.getSuggestion().click();
    CheckoutPage.getAgreeCheckbox().click({ force: true });
    CheckoutPage.getPurchaseButton().click();
    CheckoutPage.getSuccessMessage().should(
      "include.text",
      "Success! Thank you! Your order will be delivered in next few weeks :-)."
    );
  });
});
