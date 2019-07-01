describe('Sign up', function() {
  before(function() {
    cy.clearDb();
    cy.generateDb();
  });

  beforeEach(function() {
    cy.loadFixtures();
  });

  it('Sign up success', function() {
    const user = this.users[2];

    cy.deleteUser(3);
    cy.visit('/');
    cy.contains('Регистрация').click();

    cy.get('[name="first_name"]').type(user.first_name);
    cy.get('[name="last_name"]').type(user.last_name);
    cy.get('[name="email"]').type(user.email);
    cy.get('[name="password"]').type(user.password);
    cy.get('form').submit();

    cy.contains(user.first_name).should('exist');
    cy.contains(user.email).should('exist');
  });

  it('Sign up with already exist email', function() {
    cy.visit('/');
    cy.contains('Регистрация').click();
    const user = this.users[1];

    cy.get('[name="first_name"]').type(user.first_name);
    cy.get('[name="last_name"]').type(user.last_name);
    cy.get('[name="email"]').type(user.email);
    cy.get('[name="password"]').type(user.password);
    cy.get('form').submit();

    cy.contains('Данный email занят').should('exist');
  });

  it('Sign up with too short password', function() {
    cy.visit('/');
    cy.contains('Регистрация').click();
    const user = this.users[1];

    cy.get('[name="first_name"]').type(user.first_name);
    cy.get('[name="last_name"]').type(user.last_name);
    cy.get('[name="email"]').type(user.email);
    cy.get('[name="password"]').type(user.password.slice(0, 5));
    cy.get('form').submit();

    cy.contains('Пароль менее 6 символов').should('exist');
  });
});
