const login = require('../../login')
const initGhost = require('../../init_ghost')

context('Generar un color invalido', () => {
    
    let name;
    let color;

    beforeEach(() => {
       initGhost.visitGhost();
    });

    it('Escenario 8',() => {
        login.signinEvent();
        cy.wait(2000);

        cy.request('GET', 'https://my.api.mockaroo.com/users.json?key=83c48950').then(
            (response) => {
              console.log(response.body);
              cy.wait(2000)
              name = response.body.name_short;
              color = response.body.invalid_color;
              console.log(name);
              console.log(color);
            })
        cy.wait(2000);
        cy.then(() => {
            cy.get('a[href="#/tags/"]').click();
            cy.wait(2000);
            cy.get('a[class="ember-view gh-btn gh-btn-primary"]').click();
            cy.wait(2000);
            cy.get('input[id="tag-name"]').click({force:true}).type(name)
            cy.wait(2000);
            cy.get('input[placeholder="15171A"]').click({force:true}).type(color)
            cy.wait(2000);
            cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click();
            cy.wait(2000);
        })
    })
})