const login = require('../../login')
const initGhost = require('../../init_ghost')

context('Generar un slug con el minimo de caracteres permitidos', () => {
    
    let name;
    let slug;

    beforeEach(() => {
       initGhost.visitGhost();
    });

    it('Escenario 4',() => {
        login.signinEvent();
        cy.wait(2000);

        cy.request('GET', 'https://my.api.mockaroo.com/users.json?key=83c48950').then(
            (response) => {
              console.log(response.body);
              cy.wait(2000)
              var numero = Math.floor(Math.random()*response.body.length);
              name = response.body[numero].name_short;
              slug = response.body[numero].slug_short;
              console.log(name);
              console.log(slug);
            })
        cy.wait(2000);
        cy.then(() => {
            cy.get('a[href="#/tags/"]').click();
            cy.wait(2000);
            cy.get('a[class="ember-view gh-btn gh-btn-primary"]').click();
            cy.wait(2000);
            cy.get('input[id="tag-name"]').click({force:true}).type(name)
            cy.wait(2000);
            cy.get('input[id="tag-slug"]').click({force:true}).type(slug)
            cy.wait(2000);
            cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click();
            cy.wait(2000);
        })
    })
})