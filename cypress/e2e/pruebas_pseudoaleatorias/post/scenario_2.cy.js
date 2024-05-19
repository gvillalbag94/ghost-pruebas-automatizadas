const login = require('../../login');
const initGhost = require('../../init_ghost');

context('Pseudorandom: Scenario 2 By Victor', () => {
    async function getPseudoValue() {
        try {
            let arrayCharacterAlpha = [];
            const response = await fetch('https://my.api.mockaroo.com/Post.json?key=bb770d10');
            let myJson = await response.json();

            for (let i = 0; i < myJson.length; i++) {
                arrayCharacterAlpha.push(myJson[i]['numbers'].toString());
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
    

    beforeEach(() => {
        initGhost.visitGhost();
    });

    it('Create, Publish and Delete a new Draft with Numbers', () => {
        cy.wrap(getPseudoValue()).then(title => {

            // Process Login
            login.signinEvent();

            // Navigate to draft section
            cy.get('body > div.gh-app > div > nav.gh-nav > div > section > div.gh-nav-top > ul.gh-nav-list.gh-nav-manage > li.gh-nav-list-new.relative > div > div > ul > li:nth-child(1)').click();
            cy.wait(3000);
        
            // Click on new draft button
            cy.get('body > div.gh-app > div > main > section > div > header > section > div.view-actions-top-row > a').click();
            cy.wait(3000);
        
            // Add Title a new draft
            cy.get('textarea[class="gh-editor-title  ember-text-area gh-input ember-view"]').type(title);
            cy.wait(2000);
        
        
            // Click on settings
            cy.get('body > div.gh-app > div > main > button > span').click();
            cy.wait(5000);
        
            //Close Settings
            cy.get('button[title="Settings"]').click();
            cy.wait(3000);
        
            // Click on Post
            cy.get('body > div.gh-app > div > main > div.flex.flex-row > section > header > div > a > span').click();
            cy.wait(3000);
        
            // Validate that record was Created
            cy.get("div[class='posts-list gh-list  feature-memberAttribution']").contains(title).click();
            cy.wait(3000);
        
            // Click on Post
            cy.get('body > div.gh-app > div > main > div.flex.flex-row > section > header > div > a > span').click();
            cy.wait(3000);
        
            // Click on profile
            cy.get('div[class="gh-user-avatar relative"]').click();
            cy.wait(3000);
        
            // Click on Logout
            cy.get('a[class="ember-view dropdown-item user-menu-signout"]').click();
            cy.wait(3000);
        
        
            login.signinEvent();
        
            // Navigate to draft section
            cy.get('body > div.gh-app > div > nav.gh-nav > div > section > div.gh-nav-top > ul.gh-nav-list.gh-nav-manage > li.gh-nav-list-new.relative > div > div > ul > li:nth-child(1)').click();
            cy.wait(3000);
            
            // Validate that record was Created
            cy.get("div[class='posts-list gh-list  feature-memberAttribution']").contains(title).click();
            cy.wait(3000);
            
            // Click on publish button
            cy.get('header > section > button.gh-btn.gh-btn-editor.darkgrey.gh-publish-trigger > span').click();
            cy.wait(3000);
            
            // Click on continue final review button
            cy.get('body > div.epm-modal-container > div > div > div > div.gh-publish-cta > button').click();
            cy.wait(5000);
            
            // Click on publish post button
            cy.get('body > div.epm-modal-container > div > div > div > div.gh-publish-cta > button > span').click();
            cy.wait(3000);
            
            // Click on Editor
            cy.get('body > div.epm-modal-container > div > div > header > button > span').click();
            cy.wait(3000);
            
            // Click on Post
            cy.get('body > div.gh-app > div > main > div.flex.flex-row > section > header > div > a > span').click();
            cy.wait(3000);
            
            // Navigate to the published section
            cy.get('body > div.gh-app > div > nav.gh-nav > div > section > div.gh-nav-top > ul.gh-nav-list.gh-nav-manage > li.gh-nav-list-new.relative > div > div > ul > li:nth-child(3)').click();
            cy.wait(5000);
            
            // The draft was published
            cy.get('body > div.gh-app > div > main > section > div > header > div > h2').should('be.visible').and('contain', 'Published');
            cy.wait(3000);
            cy.get('h2[class="gh-canvas-title gh-post-title"]').should('be.visible').and('contain', 'Published');
            cy.wait(3000);
            
            // Click on profile
            cy.get('div[class="gh-user-avatar relative"]').click();
            cy.wait(3000);
            
            // Click on Logout
            cy.get('a[class="ember-view dropdown-item user-menu-signout"]').click();
            cy.wait(3000);
        
            login.signinEvent();
        
            // Navigate to the published section
            cy.get('body > div.gh-app > div > nav.gh-nav > div > section > div.gh-nav-top > ul.gh-nav-list.gh-nav-manage > li.gh-nav-list-new.relative > div > div > ul > li:nth-child(3)').click();
            cy.wait(3000);
            
            // Validate that record was Created
            cy.get("div[class='posts-list gh-list  feature-memberAttribution']").contains(title).click();
            cy.wait(3000);
            
            // Click on settings
            cy.get('body > div.gh-app > div > main > button > span').click();
            cy.wait(5000);
            
            // Select Button delete
            cy.get('button[data-test-button="delete-post"]').click();
            cy.wait(5000);
            
            // Delete register
            cy.get('button[data-test-button="delete-post-confirm"]').click();
            cy.wait(5000);
            
            // Click on profile
            cy.get('div[class="gh-user-avatar relative"]').click();
            cy.wait(3000);
            
            // Click on Logout
            cy.get('a[class="ember-view dropdown-item user-menu-signout"]').click();
            cy.wait(3000);

        });
    });

    
});
