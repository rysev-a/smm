declare namespace Cypress {
  // tslint:disable-next-line interface-name
  interface Chainable {
    getUsers: () => void;
    generateDb: () => void;
    clearDb: () => void;
    loadFixtures: () => void;
    authorize: (user: object) => void;

    // delete models
    deleteUser: (id: number) => void;
    deleteProject: (id: number) => void;
  }
}
