/// <reference types="Cypress" />
import HomePage from '../pages/home';

describe('Testing with page object', () => {
  let homePage;

  beforeEach(() => {
    homePage = HomePage(cy);
    homePage.open();
  });

  it('Home page title should be Test 1', () => {
    homePage.pageTitle().should('eq', 'Test 1');
  });

  it('When click on submit, should redirect to About page', () => {
    const mainPage = homePage.clickSubmit();
    mainPage.pageTitle().should('eq', 'About');
  });
});
