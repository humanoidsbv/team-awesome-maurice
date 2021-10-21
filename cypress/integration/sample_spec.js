describe("Routing", () => {
  it("Navigates to other pages", () => {
    cy.visit("http://localhost:3000");
    cy.get("[data-cy=NavigationToggle]").should("exist").click();
    cy.get("[data-cy=TeamMembers").should("exist").click();
  });
});
