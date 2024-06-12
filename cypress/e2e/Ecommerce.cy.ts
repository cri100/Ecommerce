import "cypress-real-events/support";
import * as homePage from "../fixtures/page_objects/homePage.cy";
const faker = require("faker");
let firstName, lastName, email, password;
before(() => {
	firstName = faker.name.firstName();
	lastName = faker.name.lastName();
	email = faker.internet.email();
	password = faker.internet.password();
});
beforeEach(() => {
	cy.visit("https://themeforest.net/");
	cy.viewport(1920, 1080);
});

describe("E-commerce Website Testing", () => {
	it("1. User registration", () => {
		homePage.dismissAcceptenceDialog();
		homePage.clickSignInTopMenuButton();

		homePage.createUser(firstName, lastName, email, password);
		cy.pause();

		//  !!!!!!!!!!
		// Reslove reCaptcha and click pause button in Cypress
		// !!!!!!!!!!!
		homePage.clickCreateUserButton();
		homePage.assertLoggedInUser(email);
	});

	it("2. Login as new User, Search for Electronics and add item to cart", () => {
		homePage.dismissAcceptenceDialog();
		homePage.logIn(email, password);
		cy.pause();

		//  !!!!!!!!!!
		// Reslove reCaptcha and click pause button in Cypress
		// !!!!!!!!!!!
		homePage.clickSignInButton();
		homePage.assertLoggedInUser(email);
	});
	it("3. Search for Electronics and add item to cart", () => {
		homePage.useSearchBar("electronics");
		homePage.assertSearchResults("electronics");

		homePage.clickOnTheFirstProduct();
		homePage.assertHeaderText("Ecomall - Elementor Electronics WooCommerce Theme");
		homePage.clickAddToCartButton();
		homePage.assertProductAddedToCart("Ecomall - Elementor Electronics WooCommerce Theme");
	});
});
