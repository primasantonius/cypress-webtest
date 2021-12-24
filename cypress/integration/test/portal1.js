// require('dotenv').config();
// require('faker').config();
///<reference types="cypress" />
describe('Portal test',() => {

    it('visit portal', () => {
        cy.visit('https://demoqa.com/automation-practice-form');
        cy.url().should('include','automation-practice-form')
//input nama di kolom firstname
        cy.get('#firstName')
          .type('lucky')
          .should('have.value','lucky');
//input nama di kolom lastname        
        cy.get('#lastName')
          .type('strike')
          .should('have.value','strike');
//input alamat email di kolom email
        cy.get('#userEmail')
          .type('lucky@example.com')
          .should('have.value','lucky@example.com');
// clik radio  option gender
         cy.contains('Female').click();

         cy.get('#userNumber')
           .type('0887612312');
          //  .should('have.value',10);

         cy.get('.subjects-auto-complete__value-container')
           .type('random-test');

         cy.contains('Sports').click();
         cy.get('#submit').click();

    })
})