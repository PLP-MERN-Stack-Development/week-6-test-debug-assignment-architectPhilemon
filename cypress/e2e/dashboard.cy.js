describe('Dashboard Access', () => {
  it('should display dashboard for logged-in user', () => {
    cy.visit('http://localhost:3000/dashboard');
    cy.contains('Dashboard').should('exist');
  });
});
