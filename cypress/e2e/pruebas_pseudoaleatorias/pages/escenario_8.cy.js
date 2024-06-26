const login = require('../../login')
const initGhost = require('../../init_ghost')

context('Datos Pseudoaleatorios: Crear una Page con una palabra alfanumerica con caracteres especiales de 15 caracteres', () => {

    async function getPseudoValue() {
        try {
            let arrayCharacterAlpha = new Array;
            const response = await fetch('https://my.api.mockaroo.com/pages.json?key=07b55c30');
            let myJson = await response.json();

            for (let i = 0; i < myJson.length; i++) {
                arrayCharacterAlpha.push(myJson[i]['alphanumspecial'].toString());
            }

            return arrayCharacterAlpha[random(arrayCharacterAlpha.length)];
        } catch (error) {
            console.log('That did not go well.');
            throw error;
        }
    }

    function random(countItems) {
        const number = Math.floor(Math.random() * countItems);
        return number;
    }

   
    async function getValues() {
        try {
            let title = await getPseudoValue();
            let description = await getPseudoValue();
            let urlSlug = await getPseudoValue();
    
            return [title, description, urlSlug];
        } catch (error) {
            console.error(error);
        }
    }

    beforeEach(() => {
       initGhost.visitGhost();
    });

    it('Creación de una palabra con titulo, descripción y slug con una palabra alfanumerica con caracteres especiales de 15 caracteres',() => {
        cy.wrap(getValues()).then(values => {

            let [title, description, urlSlug] = values;
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
});