// USE THE COMMAND bin/rails cypress:open IN THE TERMINAL TO RUN THE TESTS

describe("Product Details", () => {
    beforeEach(() => {
        // Visit the home page before each test
        cy.visit("/");
        cy.get("body").should("be.visible");
    });

    it("should navigate to the product detail page when a product is clicked", () => {
        // Targeting the product link inside the .product-card class
        cy.get(".product-card").first().find("a").click();

        // Verify that the URL includes '/products/' to ensure we're on a product detail page
        cy.url().should("include", "/products/");

        // Verify that a specific element exists on the product detail page
        cy.get(".product-detail").should("exist");
    });
});
