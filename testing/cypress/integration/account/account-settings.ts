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

  it('Update user account success', function() {
    const user = this.users[0];

    cy.authorize(user);

    cy.visit('/account/settings');
    const updatedUserEmail = `updated${user.email}`;

    cy.get('[name="email"]').clear();
    cy.get('[name="email"]').type(updatedUserEmail);
    cy.get('form').submit();

    cy.visit('/');

    cy.contains(updatedUserEmail).should('exist');
  });
});
