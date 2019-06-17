describe('Account settings', function() {
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

  it('Create project success', function() {
    const user = this.users[0];
    const project = this.projects[0];

    cy.authorize(user);
    cy.visit('/projects/create');

    cy.get('[name="name"]').type(project.name);
    cy.get('[name="description"]').type(project.description);
    cy.get('form').submit();

    cy.contains(project.title).should('exist');
    cy.contains(project.description).should('exist');
  });
});
