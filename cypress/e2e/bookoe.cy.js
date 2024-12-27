describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:5173/");
    cy.get("#latest").click();
    cy.location("pathname").should("eq", "/latest");
    cy.go("back");
    cy.location("pathname").should("eq", "/");
    cy.get("#toppicks").click();
    cy.location("pathname").should("eq", "/top_picks");
  });
});
