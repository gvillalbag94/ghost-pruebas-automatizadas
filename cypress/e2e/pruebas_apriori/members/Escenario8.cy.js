var arrayDatos = require("./Members.json");
describe('Creacion_de_un_member a priori', () => {
  
    beforeEach(()=>{
      cy.visit('http://54.188.89.84/ghost/')
      cy.wait(5000)
   })
   let nombre;
   let email;
   console.log(arrayDatos);
   console.log(arrayDatos[0]);
  
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
    cy.wait(5000)
    cy.reload()
    cy.wait(5000)
    cy.get('a[data-test-nav=members]').click()
    cy.wait(2000)
    cy.get("tbody tr").click()
    cy.wait(2000)
    nombre = arrayDatos[7].name;
    email = arrayDatos[7].email;
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
      cy.wait(5000)
      cy.reload()
      cy.wait(5000)
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