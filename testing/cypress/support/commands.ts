import * as yaml from 'yamljs';

Cypress.Commands.add('loadFixtures', () => {
  Promise.all([
    cy
      .readFile('../fixtures/roles.yaml')
      .then(data => cy.wrap(yaml.parse(data)).as('roles')),
    cy
      .readFile('../fixtures/users.yaml')
      .then(data => cy.wrap(yaml.parse(data)).as('users')),
    cy
      .readFile('../fixtures/projects.yaml')
      .then(data => cy.wrap(yaml.parse(data)).as('projects')),
    cy
      .readFile('../fixtures/tasks.yaml')
      .then(data => cy.wrap(yaml.parse(data)).as('tasks')),
  ]);
});

Cypress.Commands.add('generateDb', () => {
  cy.request('POST', '/api/v1/cypress/generate');
});

Cypress.Commands.add('clearDb', () =>
  cy.request('POST', '/api/v1/cypress/clear')
);

Cypress.Commands.add('authorize', user => {
  cy.request('POST', '/api/v1/account/signin', user);
});

// delete models

Cypress.Commands.add('deleteUser', id => {
  cy.request('DELETE', `/api/v1/users/${id}`);
});

Cypress.Commands.add('deleteProject', id => {
  cy.request('DELETE', `/api/v1/projects/${id}`);
});

Cypress.Commands.add('deleteTask', id => {
  cy.request('DELETE', `/api/v1/tasks/${id}`);
});
