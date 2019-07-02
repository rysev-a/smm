describe('Edit task', function() {
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

  it('Edit task name, description', function() {
    const user = this.users[0];

    cy.authorize(user);
    cy.visit('/tasks/1/edit');

    cy.contains('Редактировать задачу').should('exist');

    const editedName = 'edited name';
    const editedDescription = 'edited description';

    cy.get('[name="name"]').clear();
    cy.get('[name="name"]').type(editedName);

    cy.get('[name="description"]').clear();
    cy.get('[name="description"]').type(editedDescription);

    cy.get('form').submit();

    cy.contains(editedName).should('exist');
    cy.contains(editedDescription).should('exist');
  });

  it('Edit task assignee', function() {
    const user = this.users[0];
    const assignee = this.users[2];

    cy.authorize(user);
    cy.visit('/tasks/1/edit');

    cy.get('[name="assignee"]').type(assignee.email.slice(0, 3));
    cy.get('[name="assignee"]').click();
    cy.contains(assignee.email).click();

    cy.get('form').submit();

    cy.contains(assignee.first_name).should('exist');
  });

  it('Edit task project', function() {
    const user = this.users[0];
    const project = this.projects[2];

    cy.authorize(user);
    cy.visit('/tasks/1/edit');

    cy.get('[name="project"]').type(project.name.slice(0, 3));
    cy.get('[name="project"]').click();
    cy.contains(project.name).click();

    cy.get('form').submit();

    cy.contains(project.name).should('exist');
  });
});
