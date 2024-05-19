const login = require('../../login')
const initGhost = require('../../init_ghost')
var pagesData = require("./tags.json");

context('Generar una descripcion con el limite de caracteres permitidos', () => {

    let name = pagesData[0].name;
    let description = pagesData[1].description;

    beforeEach(() => {
       initGhost.visitGhost();
    });

    it('Escenario 2',() => {
        login.signinEvent();
        cy.wait(2000);
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
    });
});