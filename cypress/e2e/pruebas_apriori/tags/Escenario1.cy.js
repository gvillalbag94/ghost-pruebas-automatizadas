const login = require('../../login')
const initGhost = require('../../init_ghost')
var pagesData = require("./tags.json");

context('Crear tag con el minimo de caracteres', () => {

    let name = pagesData[0].name;

    beforeEach(() => {
       initGhost.visitGhost();
    });

    it('Escenario 1',() => {
        login.signinEvent();
        cy.wait(2000);
        cy.get('a[href="#/tags/"]').click();
        cy.wait(2000);
        cy.get('a[class="ember-view gh-btn gh-btn-primary"]').click();
        cy.wait(2000);
        cy.get('input[id="tag-name"]').click({force:true}).type(name)
        cy.wait(2000);
        cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click();
        cy.wait(2000);
    });
});