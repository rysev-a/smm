describe('Home', function() {
  it('Test home page', function() {
    cy.visit('/');
    expect(cy.contains('Home page')).to.exist;
  });
});
