describe('Sign in', function() {
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

  it('Sign in success', function() {
    const user = this.users[0];

    cy.visit('/');
    cy.contains('Вход').click();

    cy.get('[name="email"]').type(user.email);
    cy.get('[name="password"]').type(user.password);
    cy.get('form').submit();

    cy.contains(user.first_name).should('exist');
    cy.contains(user.email).should('exist');
  });

  it('Sign in with wrong email', function() {
    const user = this.users[0];

    cy.visit('/');
    cy.contains('Вход').click();

    cy.get('[name="email"]').type('wrongEmail@mail.com');
    cy.get('[name="password"]').type(user.password);
    cy.get('form').submit();

    cy.contains('Почта не найдена').should('exist');
  });

  it('Sign in with wrong password', function() {
    const user = this.users[0];

    cy.visit('/');
    cy.contains('Вход').click();

    cy.get('[name="email"]').type(user.email);
    cy.get('[name="password"]').type('wrong password');
    cy.get('form').submit();

    cy.contains('Неверный пароль').should('exist');
  });

  it('Sign in with wrong email format', function() {
    const user = this.users[0];

    cy.visit('/');
    cy.contains('Вход').click();

    cy.get('[name="email"]').type('wrongemailformat');
    cy.get('[name="password"]').type(user.password);
    cy.contains('Неверный формат email').should('exist');
  });
});
