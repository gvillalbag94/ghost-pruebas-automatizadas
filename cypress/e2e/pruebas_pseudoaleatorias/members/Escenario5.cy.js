describe('Creación de un member con email incorrecto (Pseudoleatoria)', () => {
  
    beforeEach(()=>{
      cy.visit('http://54.188.89.84/ghost/')
      cy.wait(3000)
   })
   let nombre;
   let email;
   
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
    cy.request('GET', 'https://my.api.mockaroo.com/users.json?key=9b042a60').then(
        (response) => {
          console.log(response.body);
          cy.wait(2000)
          var numero = Math.floor(Math.random()*response.body.length);
          nombre = response.body[numero].name;
          email = response.body[numero].wrong;
          console.log(nombre);
          console.log(email);
        })
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
      cy.wait(3000)
      cy.reload()
      cy.wait(3000)
      cy.get('a[data-test-nav=members]').click()
      cy.wait(2000)
      cy.contains(nombre).should('not.exist')
      cy.wait(2000)
    })
  })
  })
  
  