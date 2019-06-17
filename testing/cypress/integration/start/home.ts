describe('Home', function() {
  it('Test home page', function() {
    cy.visit('/');
    expect(cy.contains('Войти на сайт')).to.exist;
  });
});
