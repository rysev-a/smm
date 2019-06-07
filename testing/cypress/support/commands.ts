import * as yaml from 'yamljs';

Cypress.Commands.add('loadFixtures', () => {
  const fixtures = ['users', 'roles'];

  fixtures.reduce(
    (acc: any, fixture) =>
      acc.then(() =>
        cy
          .readFile(`../fixtures/${fixture}.yaml`)
          .then(data => cy.wrap(yaml.parse(data)).as(fixture))
      ),
    Promise.resolve()
  );
});

Cypress.Commands.add('generateDb', () => {
  cy.request('POST', '/api/v1/cypress/generate');
});

Cypress.Commands.add('clearDb', () =>
  cy.request('POST', '/api/v1/cypress/clear')
);
