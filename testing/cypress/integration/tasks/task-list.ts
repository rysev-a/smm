describe('Task list', function() {
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

  it('Get task list', function() {
    // console.log(this.users);
    const user = this.users[0];

    const task0 = this.tasks[0];
    const task1 = this.tasks[1];
    const task2 = this.tasks[2];
    const task3 = this.tasks[3];

    cy.authorize(user);
    cy.visit('/tasks');

    cy.contains(task0.name).should('exist');
    cy.contains(task0.description).should('exist');

    cy.contains(task1.name).should('exist');
    cy.contains(task1.description).should('exist');

    cy.contains(task2.name).should('exist');
    cy.contains(task2.description).should('exist');

    cy.contains(task3.name).should('exist');
    cy.contains(task3.description).should('exist');
  });
});
