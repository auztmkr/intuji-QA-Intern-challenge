// Ignore cross-origin script errors that may break tests unintentionally.
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Automation Practice Form', () => {

  beforeEach(() => {
    // Visit the form before each test
    cy.visit('https://demoqa.com/automation-practice-form');
  });

t('Should fill the form and submit successfully', () => {
    // Fill Name
    cy.get('#firstName').type('Ayus');
    cy.get('#lastName').type('Tamrakar');
    
    // Fill Email
    cy.get('#userEmail').type('ayust@test.com');
    
    // Select Gender (Male)
    cy.get('label[for="gender-radio-1"]').click();
    
    // Fill Mobile Number
    cy.get('#userNumber').type('9876543210');
    
    // Select Date of Birth
    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__month-select').select('April');
    cy.get('.react-datepicker__year-select').select('1995');
    cy.get('.react-datepicker__day--015:not(.react-datepicker__day--outside-month)').click();

    // Fill Subjects
    cy.get('#subjectsInput').type('Maths{enter}');
    
    // Select Hobbies
    cy.get('label[for="hobbies-checkbox-1"]').click(); // Sports
    cy.get('label[for="hobbies-checkbox-2"]').click(); // Reading
    
    // Upload Picture
    cy.get('input[type="file"]').attachFile('example.png');

    // Fill Address
    cy.get('#currentAddress').type('NewRoad, Kathmandu');

    // Select State and City
    cy.get('#state').click().find('.css-26l3qy-menu').contains('NCR').click();
    cy.get('#city').click().find('.css-26l3qy-menu').contains('Delhi').click();

    // Submit Form
    cy.get('#submit').click();

    // Assert the submission modal
    cy.get('.modal-content').should('contain', 'Thanks for submitting the form');
  });

 it('Should show errors on submitting empty form', () => {
    cy.get('#submit').click();

    // Check that First Name field shows error (red border)
    cy.get('#firstName').should('have.css', 'border-color', 'rgb(220, 53, 69)');
  });
  
  it('Should allow multiple subjects to be entered', () => {
    cy.get('#subjectsInput').type('Maths{enter}English{enter}History{enter}');
    cy.get('.subjects-auto-complete__multi-value').should('have.length', 3);
  });
  
it('Should allow selecting multiple hobbies', () => {
    cy.get('label[for="hobbies-checkbox-1"]').click(); // Sports
    cy.get('label[for="hobbies-checkbox-2"]').click(); // Reading
    cy.get('label[for="hobbies-checkbox-3"]').click(); // Music
    cy.get('input[type="checkbox"]:checked').should('have.length', 3);
  });
