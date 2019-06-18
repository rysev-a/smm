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

  it('Get projects list', function() {
    const user = this.users[0];

    const firstProject = this.projects[0];
    const secondProject = this.projects[1];
    const thirdProject = this.projects[2];

    cy.authorize(user);
    cy.visit('/projects');

    cy.contains(firstProject.name).should('exist');
    cy.contains(firstProject.description).should('exist');

    cy.contains(secondProject.name).should('exist');
    cy.contains(secondProject.description).should('exist');

    cy.contains(thirdProject.name).should('exist');
    cy.contains(thirdProject.description).should('exist');
  });
});
