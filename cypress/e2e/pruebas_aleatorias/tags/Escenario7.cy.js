const login = require('../../login')
const initGhost = require('../../init_ghost')
import {faker} from '@faker-js/faker'

context('Generar un color valido', () => {

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
        cy.get('input[id="tag-name"]').click({force:true}).type(faker.string.alpha())
        cy.wait(2000);
        cy.get('input[placeholder="15171A"]').click({force:true}).type(faker.color.rgb({ prefix: '', casing: 'lower' }))
        cy.wait(2000);
        cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click();
        cy.wait(2000);
    });
});