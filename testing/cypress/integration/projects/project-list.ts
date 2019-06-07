describe('Project list', function() {
  it('Get project list', function() {
    cy.visit('/projects');
    cy.get('.load-projects').click();

    expect(cy.contains('Learn english')).to.exist;
  });
});
