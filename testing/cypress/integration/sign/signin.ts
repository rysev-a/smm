describe('Load yaml', function() {
  beforeEach(function() {
    cy.loadFixtures();
  });

  before(function() {
    cy.generateDb();
  });

  after(function() {
    cy.clearDb();
  });

  it('Sign up success', function() {
    const user = this.users[0];

    cy.visit('/');
    cy.contains('SignUp').click();
    cy.get('[name="email"]').type(user.email);
    cy.get('[name="password"]').type(user.password);
    cy.get('form').submit();
    // cy.contains(user.email).should('exist');
  });

  // it('Signin with invalid email', function() {
  //   const user = this.users[0];
  //   cy.visit('/');
  //   cy.contains('Вход').click();

  //   cy.get('[name="email"]').type(`error_${user.email}`);
  //   cy.get('form').submit();

  //   cy.get('[name="email"]')
  //     .next()
  //     .should('have.text', 'not found');
  // });

  // it('Singin with wrong password ', function() {
  //   const user = this.users[0];
  //   cy.visit('/');
  //   cy.contains('Вход').click();

  //   cy.get('[name="email"]').type(user.email);
  //   cy.get('[name="password"]').type('invalid password');
  //   cy.get('form').submit();

  //   cy.get('[name="password"]')
  //     .next()
  //     .should('have.text', 'wrong password');
  // });

  // it('Sign up', function() {
  //   // get user with id 10
  //   const user = this.users[9];
  //   cy.deleteUser(10);

  //   cy.visit('/');
  //   cy.contains('Регистрация').click();

  //   cy.get('[name="first_name"]').type(user.first_name);
  //   cy.get('[name="last_name"]').type(user.last_name);
  //   cy.get('[name="email"]').type(user.email);
  //   cy.get('[name="password"]').type(user.password);
  //   cy.get('form').submit();

  //   cy.contains(user.email).should('exist');
  // });

  // it('Sign out', function() {
  //   const user = this.users[0];
  //   cy.authorize(user);
  //   cy.visit('/');
  //   cy.contains(user.email).should('exist');
  //   cy.get('#account-dropdown .navbar-dropdown').invoke('show');
  //   cy.contains('Выйти').click();
  //   cy.contains('Вход').should('exist');
  // });
});
