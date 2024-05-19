const login = require('../../login')
const initGhost = require('../../init_ghost')
import {faker} from '@faker-js/faker'

context('Generar una descripcion con el limite de caracteres permitidos', () => {

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
        cy.get('input[id="tag-name"]').click({force:true}).type(faker.string.alpha())
        cy.wait(2000);
        cy.get('textarea[id="tag-description"]').click({force:true}).type(faker.string.alpha(500))
        cy.wait(2000);
        cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click();
        cy.wait(2000);
    });
});