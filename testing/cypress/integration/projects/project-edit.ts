describe('Edit project', function() {
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

  it('Edit project name, description', function() {
    const user = this.users[0];

    cy.authorize(user);
    cy.visit('/projects/1/edit');

    cy.contains('Редактировать проект').should('exist');

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

  it('Edit project users', function() {
    const user = this.users[0];

    const user1 = this.users[1];
    const user2 = this.users[2];
    const user3 = this.users[3];

    cy.authorize(user);

    cy.visit('/projects/1/edit');

    cy.get('[name="users"]').type(user1.email.slice(0, 3));
    cy.get('[name="users"]').click();
    cy.contains(user1.email).click();

    cy.get('[name="users"]').type(user2.email.slice(0, 3));
    cy.get('[name="users"]').click();
    cy.contains(user2.email).click();

    cy.get('[name="users"]').type(user3.email.slice(0, 3));
    cy.get('[name="users"]').click();
    cy.contains(user3.email).click();

    cy.get('form').submit();

    cy.contains(user1.email).should('exist');
    cy.contains(user2.email).should('exist');
    cy.contains(user3.email).should('exist');
  });
});
