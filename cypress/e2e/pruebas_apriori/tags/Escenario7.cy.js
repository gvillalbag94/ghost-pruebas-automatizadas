const login = require('../../login')
const initGhost = require('../../init_ghost')
var pagesData = require("./tags.json");

context('Generar un color valido', () => {

    let name = pagesData[0].name;
    let color = pagesData[0].color;

    beforeEach(() => {
       initGhost.visitGhost();
    });

    it('Escenario 7',() => {
        login.signinEvent();
        cy.wait(2000);
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
    });
});