describe('Create project', function() {
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

    cy.deleteProject(1);

    cy.authorize(user);
    cy.visit('/projects/create');

    cy.contains('Создать новый проект').should('exist');

    cy.get('[name="name"]').type(project.name);
    cy.get('[name="description"]').type(project.description);
    cy.get('form').submit();

    cy.contains(project.name).should('exist');
    cy.contains(project.description).should('exist');
  });
});
