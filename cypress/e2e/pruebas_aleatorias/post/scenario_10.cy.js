const login = require('../../login')
const initGhost = require('../../init_ghost')
import { faker } from '@faker-js/faker';

context('Random Data: Scenario 10 By Victor', () => {

    let title = faker.vehicle.bicycle();
    let Subtitle = faker.number.binary();
    let Subtitle_ = faker.lorem.lines();

    beforeEach(() => {
       initGhost.visitGhost();
    });


    it('Create, Edit and Delete a new Draft with an Real register',() => {
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

        //Close Settings
        cy.get('button[title="Settings"]').click();
        cy.wait(3000);

        //Clic on Post
        cy.get('body > div.gh-app > div > main > div.flex.flex-row > section > header > div > a > span').click();
        cy.wait(5000);

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


    it('Edit Draft',() => {
        //Process Login
        login.signinEvent();

        //Navegate to draft section
        cy.get('body > div.gh-app > div > nav.gh-nav > div > section > div.gh-nav-top > ul.gh-nav-list.gh-nav-manage > li.gh-nav-list-new.relative > div > div > ul > li:nth-child(1)').click();
        cy.wait(3000); 

        // Validate that record was Created.
        cy.get("div[class='posts-list gh-list  feature-memberAttribution']").contains(title).click();
        cy.wait(3000);


        //Add Subtitle a new draft
        cy.get('div[class="kg-prose"]').type(Subtitle_);
        cy.wait(500);

        //Clic on settings
        cy.get('body > div.gh-app > div > main > button > span').click();
        cy.wait(5000); 

        //Close Settings
        cy.get('button[title="Settings"]').click();
        cy.wait(3000);
        
        //I click on Post'
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


    it('Delete Register',() => {
        //Process Login
        login.signinEvent();

        //Navigate to the published section
        cy.get('body > div.gh-app > div > nav.gh-nav > div > section > div.gh-nav-top > ul.gh-nav-list.gh-nav-manage > li.gh-nav-list-new.relative > div > div > ul > li:nth-child(1)').click();
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