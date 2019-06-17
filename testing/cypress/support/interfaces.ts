declare namespace Cypress {
  // tslint:disable-next-line interface-name
  interface Chainable {
    getUsers: () => void;
    generateDb: () => void;
    clearDb: () => void;
    loadFixtures: () => void;
    deleteUser: (id: number) => void;
    authorize: (user: object) => void;
  }
}
