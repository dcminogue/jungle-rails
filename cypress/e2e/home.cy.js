describe("Home Page", () => {
    beforeEach(() => {
        cy.visit("/");
        cy.get("body").should("be.visible");
    });

    it("should verify the header text", () => {
        // Log the full text content of the h1 element using .invoke('text')
        cy.get("h1")
            .invoke("text")
            .then(text => {
                const trimmedText = text.trim();
                console.log("Full H1 Element Text using .invoke:", trimmedText);
            });

        // Check for the exact text 'Welcome to Jungle' in the h1 element
        cy.get("h1")
            .should("be.visible")
            .invoke("text")
            .then(text => {
                const trimmedText = text.trim();
                expect(trimmedText).to.equal("Welcome to Jungle");
            });
    });

    it("should verify there are products on the page", () => {
        cy.get(".products article").should("be.visible");
    });

    it("should verify there are 2 products on the page", () => {
        cy.get(".products article").should("have.length", 2);
    });
});
