describe('Registration Flow', () => {
  it('registers a new user', () => {
    cy.visit('http://localhost:3000/register');
    cy.get('input[name="name"]').type('Philemon');
    cy.get('input[name="email"]').type('newuser@example.com');
    cy.get('input[name="password"]').type('password123');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/dashboard');
  });
});
