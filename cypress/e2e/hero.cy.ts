describe('Landing page', () => {
  it('shows hero headline', () => {
    cy.visit('/');
    cy.contains('course store in 4 minutes').should('be.visible');
  });
});
