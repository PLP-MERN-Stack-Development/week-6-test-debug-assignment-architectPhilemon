describe('Homepage', () => {
  it('loads the homepage and finds Hello text', () => {
    cy.visit('http://localhost:5173/');
    cy.contains('Vite + React'); // Or replace with actual text if you edited it
  });
});
