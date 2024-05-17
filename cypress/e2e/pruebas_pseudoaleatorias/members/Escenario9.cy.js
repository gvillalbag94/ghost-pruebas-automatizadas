describe('Creacion_de_un_member', () => {
  
    beforeEach(()=>{
      cy.visit('http://54.188.89.84/ghost/')
      cy.wait(5000)
   })
   let nombre;
   let email;
   
   it('Escenario 9', ()=>{
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
    cy.request('GET', 'https://my.api.mockaroo.com/users.json?key=9b042a60').then(
        (response) => {
          console.log(response.body);
          cy.wait(2000)
          nombre = response.body.ip;
          email = response.body.email;
          console.log(nombre);
          console.log(email);
        })
    cy.then(() => {
      cy.get('#member-name').clear()
      cy.wait(2000)
      cy.get('#member-name').type(nombre)
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
  
  