const login = require('../../login')
const initGhost = require('../../init_ghost')

context('Generar una descripcion mayor al limite de caracteres permitidoss', () => {
    
    let name;
    let description;

    beforeEach(() => {
       initGhost.visitGhost();
    });

    it('Escenario 3',() => {
        login.signinEvent();
        cy.wait(2000);

        cy.request('GET', 'https://my.api.mockaroo.com/users.json?key=83c48950').then(
            (response) => {
              console.log(response.body);
              cy.wait(2000)
              name = response.body.name_short;
              description = response.body.description_long;
              console.log(name);
              console.log(description);
            })
        cy.wait(2000);
        cy.then(() => {
            cy.get('a[href="#/tags/"]').click();
            cy.wait(2000);
            cy.get('a[class="ember-view gh-btn gh-btn-primary"]').click();
            cy.wait(2000);
            cy.get('input[id="tag-name"]').click({force:true}).type(name)
            cy.wait(2000);
            cy.get('textarea[id="tag-description"]').click({force:true}).type(description)
            cy.wait(2000);
            cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click();
            cy.wait(2000);
        })
    })
})