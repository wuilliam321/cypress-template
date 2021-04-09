/// <reference types="Cypress" />
import HomePage from '../pages/home';
import {users} from '../fixtures/users';

describe('Testing with page object', () => {
  let homePage;

  beforeEach(() => {
    homePage = HomePage(cy);
    homePage.open();
  });

  it('Home page should be login', () => {
    homePage.pageTitle().should('eq', 'Partner Portal - Iniciar sesión');
  });

  it('Given a user with X perm and Flag X', () => {
    homePage.usernameInput().type(users.email);
    homePage.passwordInput().type(users.password);
    const mainPage = homePage.clickIngresarBtn();
    mainPage.pageTitle().should('eq', 'Partner Portal - Reportes');
  });
});
