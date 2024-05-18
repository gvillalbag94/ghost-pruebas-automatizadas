const login = require('../../login')
const initGhost = require('../../init_ghost')
var pagesData = require("./pages.json");

context('Datos Apriori: Crear una Page con una palabra basada en una url', () => {

    let title = pagesData[8].title;
    let description = pagesData[8].description;
    let urlSlug = pagesData[8].slug;

    beforeEach(() => {
       initGhost.visitGhost();
    });

    it('Creación de una palabra con titulo, descripción y slug con una palabra basada en una url',() => {
        login.signinEvent();

        // Seleccionar la sección de "Pages".
        cy.get('a[href="#/pages/"]').click();
        cy.wait(500);

        // La URL contiene la ruta de "Pages".
        cy.url().should('contain','/pages');
        cy.wait(500);

        // Seleccioanr el boton de crear una "Page".
        cy.get('a[href="#/editor/page/"]').click();
        cy.wait(500);

        // La URL contiene la ruta de edición/creación de una "Page".
        cy.url().should('contain','/editor/page');
        cy.wait(500);

        // Seleccionar el campo del titulo e ingresar un valor.
        cy.get('textarea[class="gh-editor-title  ember-text-area gh-input ember-view"]').type(title);
        cy.wait(500);

        // Seleccionar el campo de la descripción e ingresar un valor.
        cy.get('div[class="kg-prose"]').type(description);
        cy.wait(500);

        // Abrir las configuraciones de la creación/edición de una "Page".
        cy.get('button[title="Settings"]').click();
        cy.wait(500);

        // Seleccionar el campo del valor del slug para la URL de la "Page" e ingresar un valor.
        cy.get('input[id="url"]').type(urlSlug);
        cy.wait(500);

        // Cerrar las configuraciones de la creación/edición de una "Page".
        cy.get('button[title="Settings"]').click();
        cy.wait(500);

        // Publicar la Page.
        cy.get('button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger[data-test-button="publish-flow"]')
        .contains('Publish')
        .click();
        cy.wait(500);

        // Continuar con la publicación de la "Page".
        cy.get('button[data-test-button="continue"]').click();
        cy.wait(500);

        // Confirmar con la publicación de la "Page".
        cy.get('button[data-test-button="confirm-publish"]').click();
        cy.wait(2000);

        // Regresar al dashboar de Ghost.
        cy.get('a[class="ember-view gh-back-to-editor"]') 
        .contains('Back to dashboard')
        .click();
        cy.wait(500);

        // Seleccionar la sección de "Pages".
        cy.get('a[href="#/pages/"]').click();
        cy.wait(500);

        // Validar que existe una "Page" publicada con el titulo generado y seleccionarlo.
        cy.get("div[class='posts-list gh-list  feature-memberAttribution']")
        .contains(title)
        .click();
        cy.wait(500);

        // Abrir las configuraciones de la creación/edición de una "Page".
        cy.get('button[title="Settings"]').click();
        cy.wait(500);

        // Seleccionar el boton de eliminar la "Page".
        cy.get('button[data-test-button="delete-post"]').click();
        cy.wait(500);

        // Confirmar la eliminación de la "Page".
        cy.get('button[data-test-button="delete-post-confirm"]').click();
        cy.wait(500);

        // Validar que No existe una "Page" publicada con el titulo generado.
        cy.get("div[class='posts-list gh-list  feature-memberAttribution']")
        .should('not.contain',"Edit TAG cypress page");
        cy.wait(500);
    });
});