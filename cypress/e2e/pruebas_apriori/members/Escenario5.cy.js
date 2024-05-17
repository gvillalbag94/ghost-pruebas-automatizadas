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
  
  it('Escenario 5', ()=>{
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
    nombre = arrayDatos[4].name;
    email = arrayDatos[4].wrong;
    console.log(nombre);
    console.log(email);
    cy.then(() => {
      cy.get('#member-name').type(nombre)
      cy.wait(2000)
      cy.get('#member-email').type(email)
      cy.wait(2000)
      cy.get('button[data-test-button=save]').click()
      cy.wait(2000)
      cy.get('a[data-test-nav=members]').click()
      cy.wait(2000)
      cy.get('button[data-test-leave-button]').click()
      cy.wait(5000)
      cy.reload()
      cy.wait(5000)
      cy.get('a[data-test-nav=members]').click()
      cy.wait(2000)
      cy.contains(nombre).should('not.exist')
      cy.wait(2000)
    })
  })
  
  })