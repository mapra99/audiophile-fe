describe("smoke tests", () => {
  it("should load the homepage", () => {
    cy.visitAndCheck("/");
  });  
});
