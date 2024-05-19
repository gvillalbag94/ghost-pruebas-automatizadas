const login = require('../../login')
const initGhost = require('../../init_ghost')
var pagesData = require("./pages.json");

context('Random Data Apriori: Scenario 4 By Victor', () => {

    let title = pagesData[3].title; // '110101';
    let Subtitle = pagesData[3].subtitle;

    beforeEach(() => {
       initGhost.visitGhost();
    });


    it('Create, Publish and Delete a new Draft with a Number',() => {
        //Process Login
        login.signinEvent();
        //Navegate to draft section
        cy.get('body > div.gh-app > div > nav.gh-nav > div > section > div.gh-nav-top > ul.gh-nav-list.gh-nav-manage > li.gh-nav-list-new.relative > div > div > ul > li:nth-child(1)').click();
        cy.wait(3000); 

        //Clic on new draft button
        cy.get('body > div.gh-app > div > main > section > div > header > section > div.view-actions-top-row > a').click();
        cy.wait(3000); 

        //Add Title a new draft
        cy.get('textarea[class="gh-editor-title  ember-text-area gh-input ember-view"]').type(title);
        cy.wait(3000); 

        //Add Subtitle a new draft
        cy.get('div[class="kg-prose"]').type(Subtitle);
        cy.wait(500);

        //Clic on settings
        cy.get('body > div.gh-app > div > main > button > span').click();
        cy.wait(5000); 

        //Clic on Post
        cy.get('body > div.gh-app > div > main > div.flex.flex-row > section > header > div > a > span').click();
        cy.wait(3000);

        // Validate that record was Created.
        cy.get("div[class='posts-list gh-list  feature-memberAttribution']").contains(title).click();
        cy.wait(3000);

        //Clic on Post
        cy.get('body > div.gh-app > div > main > div.flex.flex-row > section > header > div > a > span').click();
        cy.wait(3000);

                
        //Clic On profile
        cy.get('div[class="gh-user-avatar relative"]').click();
        cy.wait(3000); 

        //Clic on Logout
        cy.get('a[class="ember-view dropdown-item user-menu-signout"]').click();
        cy.wait(3000); 

    });


    it('Publish Draft',() => {
        //Process Login
        login.signinEvent();

        //Navegate to draft section
        cy.get('body > div.gh-app > div > nav.gh-nav > div > section > div.gh-nav-top > ul.gh-nav-list.gh-nav-manage > li.gh-nav-list-new.relative > div > div > ul > li:nth-child(1)').click();
        cy.wait(3000); 

        // Validate that record was Created.
        cy.get("div[class='posts-list gh-list  feature-memberAttribution']").contains(title).click();
        cy.wait(3000);
        
        //I click on publish button
        cy.get('header > section > button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger > span').click();
        cy.wait(3000); 

        //I click on contnue final review button
        cy.get('body > div.epm-modal-container > div>  div > div > div.gh-publish-cta > button').click();
        cy.wait(5000); 

        //I click on publish post button
        cy.get('body > div.epm-modal-container > div>  div > div > div.gh-publish-cta > button > span ').click();
        cy.wait(3000); 
        
        //I click on Editor
        cy.get('body > div.epm-modal-container > div > div > header > button > span').click();
        cy.wait(3000); 

        //I click on Post'
        cy.get('body > div.gh-app > div > main > div.flex.flex-row > section > header > div > a > span').click();
        cy.wait(3000);

        //I navigate to the published section
        cy.get('body > div.gh-app > div > nav.gh-nav > div > section > div.gh-nav-top > ul.gh-nav-list.gh-nav-manage > li.gh-nav-list-new.relative > div > div > ul > li:nth-child(3)').click();
        cy.wait(5000); 

        //The draft was published
        cy.get('body > div.gh-app > div > main > section > div > header > div > h2').should('be.visible').and('contain', 'Published');
        cy.wait(3000); 
        cy.get('h2[class="gh-canvas-title gh-post-title"]').should('be.visible').and('contain', 'Published');
        cy.wait(3000); 

        //Clic On profile
        cy.get('div[class="gh-user-avatar relative"]').click();
        cy.wait(3000); 

        //Clic on Logout
        cy.get('a[class="ember-view dropdown-item user-menu-signout"]').click();
        cy.wait(3000); 

    });


    it('Delete Register',() => {
        //Process Login
        login.signinEvent();

        //Navigate to the published section
        cy.get('body > div.gh-app > div > nav.gh-nav > div > section > div.gh-nav-top > ul.gh-nav-list.gh-nav-manage > li.gh-nav-list-new.relative > div > div > ul > li:nth-child(3)').click();
        cy.wait(3000); 

        // Validate that record was Created.
        cy.get("div[class='posts-list gh-list  feature-memberAttribution']").contains(title).click();
        cy.wait(3000);

        //Clic on settings
        cy.get('body > div.gh-app > div > main > button > span').click();
        cy.wait(5000); 

        // Select Button delete.
        cy.get('button[data-test-button="delete-post"]').click();
        cy.wait(5000);
        
        // Delete register.
        cy.get('button[data-test-button="delete-post-confirm"]').click();
        cy.wait(5000);
        
        //Clic On profile
        cy.get('div[class="gh-user-avatar relative"]').click();
        cy.wait(3000); 

        //Clic on Logout
        cy.get('a[class="ember-view dropdown-item user-menu-signout"]').click();
        cy.wait(3000); 

    });






});