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
          .type('steve')
          .should('have.value','steve');
//input alamat email di kolom email
        cy.get('#userEmail')
          .type('lucky@example.com')
          .should('have.value','lucky@example.com');
// click radio  option gender
         cy.contains('Female').click();
// input nomer hp di kolom mobile
         cy.get('#userNumber')
           .type('0887612312');
// click checkbox option Hobbies
         cy.contains('Sports').click();  
// input alamat di kolom address
           cy.get('#currentAddress')
           .type('Jl random-test cool and nice');

         cy.get('#submit').click();

    })
})