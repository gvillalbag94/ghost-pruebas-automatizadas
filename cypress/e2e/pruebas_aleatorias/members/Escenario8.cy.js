import { faker } from '@faker-js/faker';
describe('Edición de un member con nombre vacio (Aleatoria)', () => {
  
    beforeEach(()=>{
      cy.visit('http://54.188.89.84/ghost/')
      cy.wait(3000)
   })
   let nombre;
   let email;
   console.log(faker.person.fullName());
   console.log(faker.internet.email());
  
  it('Escenario 8', ()=>{
    cy.get('#identification').type('user@example.com')
    cy.wait(2000)
    cy.get('#password').type('123456789**')
    cy.wait(2000)
    cy.get('#ember5').click()
    cy.wait(2000)
    cy.get('a[data-test-nav=members]').click()
    cy.wait(2000)
    cy.get('a[data-test-new-member-button=true]').click()
    cy.wait(2000)
    cy.get('#member-name').type('Prueba cypress')
    cy.wait(2000)
    cy.get('#member-email').type('pcypress@gmail.com')
    cy.wait(2000)
    cy.get('button[data-test-button=save]').click()
    cy.wait(2000)
    cy.get('a[data-test-nav=members]').click()
    cy.wait(3000)
    cy.reload()
    cy.wait(3000)
    cy.get('a[data-test-nav=members]').click()
    cy.wait(2000)
    cy.get("tbody tr").click()
    cy.wait(2000)
    nombre = faker.person.fullName();
    email = faker.internet.email();
    console.log(nombre);
    console.log(email);
    cy.then(() => {
      cy.get('#member-name').clear()
      cy.wait(2000)
      cy.get('#member-email').clear()
      cy.wait(2000)
      cy.get('#member-email').type(email)
      cy.wait(2000)
      cy.get('button[data-test-button=save]').click()
      cy.wait(2000)
      cy.get('a[data-test-nav=members]').click()
      cy.wait(3000)
      cy.reload()
      cy.wait(3000)
      cy.get('a[data-test-nav=members]').click()
      cy.wait(2000)
      cy.contains(email).should('exist')
      cy.wait(2000)
      cy.get("tbody tr").click()
      cy.wait(2000)
      cy.get('button[data-test-button=member-actions]').click()
      cy.wait(2000)
      cy.get('button[data-test-button=delete-member]').click()
      cy.wait(2000)
      cy.get('button[data-test-button=confirm]').click()
      cy.wait(2000)
    })
  })
  
  })