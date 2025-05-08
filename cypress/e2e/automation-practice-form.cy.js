// Ignore cross-origin script errors that may break tests unintentionally.
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Automation Practice Form', () => {

  beforeEach(() => {
    // Visit the form before each test
    cy.visit('https://demoqa.com/automation-practice-form');
  });
