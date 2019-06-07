describe('Load yaml', function() {
  before(function() {
    cy.loadFixtures();
    cy.generateDb();
  });

  after(function() {
    cy.clearDb();
  });

  it('Sign up', function() {
    const user = this.users[0];

    cy.visit('/');
    cy.contains('SignUp').click();

    cy.get('[name="first_name"]').type(user.first_name);
    cy.get('[name="last_name"]').type(user.last_name);
    cy.get('[name="email"]').type(user.email);
    cy.get('[name="password"]').type(user.password);
    cy.get('form').submit();

    // cy.contains(user.email).should('exist');
  });
});
