export function assertLoggedInUser(email: string) {
	const user = email.split("@")[0].replace(/\./g, "").toLowerCase();
	cy.contains('[id="tlp-header-user-nav"]', user).should("be.visible");
}
export function dismissAcceptenceDialog() {
	cy.get('[id="CybotCookiebotDialogBodyLevelButtonAccept"]').should("be.visible").click();
}
export function clickSignInTopMenuButton() {
	cy.get('[id="tlp-header-user-nav"]').should("be.visible").click();
}
export function clickSignInButton() {
	cy.get('[id="tlp-header-user-nav"]').should("be.visible").realClick();
}
export function clickCreateAccountLink() {
	assertVisibleLogInDialog();
	cy.contains(`[data-testid="signUpLink"] span`, "Create an Envato account").should("be.visible").click();
}
export function clickCreateUserButton() {
	cy.contains('button[data-testid="submitButton"]', "Create account").should("be.visible").click();
}
export function createUser(lastName: string, firstName: string, email: string, password: string) {
	clickCreateAccountLink();
	cy.get('input[data-testid="firstName"]').should("be.visible").type(lastName);
	cy.get('input[data-testid="lastName"]').should("be.visible").type(firstName);
	cy.get('input[data-testid="email"]').should("be.visible").type(email);
	cy.get('input[data-testid="password"]').should("be.visible").type(password);

	clickCreateUserButton();
}

export function logIn(email: string, password: string) {
	clickSignInTopMenuButton();

	cy.get('input[data-testid="username"]').should("be.visible").type(email);
	cy.get('input[data-testid="password"]').should("be.visible").type(password);

	cy.contains('button[data-testid="submitButton"]', "Sign in").should("be.visible").click();
}

function assertVisibleLogInDialog() {
	cy.get('div[data-modal-target="content"]').should("be.visible");
}

export function useSearchBar(searchValue: string) {
	cy.get('input[placeholder="e.g. responsive WordPress"]').should("be.visible").type(searchValue);
	cy.get('button[aria-label="Search"]').should("be.visible").click();
}
export function assertSearchResults(searchValue: string) {
	cy.contains("ul li span", searchValue).should("be.visible");
	cy.contains('[data-analytics-item-impressions-target="item"]', searchValue).should("have.length.greaterThan", 0);
}
export function clickOnTheFirstProduct() {
	cy.get('a[class="shared-item_cards-item_name_component__itemNameLink"]').eq(0).should("be.visible").click();
}

export function assertHeaderText(productName: string) {
	cy.contains("h1", productName).should("be.visible");
}
export function clickAddToCartButton() {
	cy.contains("strong", "Add to Cart").should("be.visible").click();
}

export function assertProductAddedToCart(productName: string) {
	cy.contains("h2", "Item added to your cart").should("be.visible");
	cy.contains("div h5", productName).should("be.visible");
}
