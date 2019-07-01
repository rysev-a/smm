describe('Project list', function() {
  before(function() {
    cy.clearDb();
    cy.generateDb();
  });

  beforeEach(function() {
    cy.loadFixtures();
  });

  after(function() {
    cy.clearDb();
  });

  it('Get projects detail', function() {
    const user = this.users[0];
    const project = this.projects[0];

    cy.authorize(user);
    cy.visit('/projects/1');

    cy.contains(project.name).should('exist');
    cy.contains(project.description).should('exist');
  });
});
