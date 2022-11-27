describe("homepage", () => {
  it("should load the homepage", () => {
    cy.visitAndCheck("/");
  });

  it("should see the footer", () => {
    cy.visit("/")
    cy.get('footer')
      .should('be.visible');
  })

  it ("should click any link on the footer", () => {
    cy.visit("/")
    cy.get("footer nav a")
      .last()
      .click()
  })
});
