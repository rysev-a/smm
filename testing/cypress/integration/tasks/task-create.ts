describe('Create task', function() {
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

  it('Create task success', function() {
    const user = this.users[0];
    const assignee = this.users[1];
    const project = this.projects[0];
    const task = this.tasks[0];

    cy.deleteTask(1);

    cy.authorize(user);
    cy.visit('/tasks/create');

    cy.contains('Создать новую задачу').should('exist');

    cy.get('[name="name"]').type(task.name);
    cy.get('[name="description"]').type(task.description);

    cy.get('[name="assignee"]').type(assignee.email.slice(0, 3));
    cy.get('[name="assignee"]').click();
    cy.contains(assignee.email).click();

    cy.get('[name="project"]').type(project.name.slice(0, 3));
    cy.get('[name="project"]').click();
    cy.contains(project.name).click();

    cy.get('form').submit();

    cy.contains(task.name).should('exist');
    cy.contains(task.description).should('exist');
    cy.contains(project.name).should('exist');

    cy.contains(assignee.first_name).should('exist');
    cy.contains(assignee.last_name).should('exist');

    cy.contains(user.first_name).should('exist');
    cy.contains(user.last_name).should('exist');
  });
});
