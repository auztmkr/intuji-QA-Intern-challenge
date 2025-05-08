// Ignore cross-origin script errors that may break tests unintentionally.
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});
