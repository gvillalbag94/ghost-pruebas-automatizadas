class InitGhost {
    visitGhost = () => {
        cy.visit('http://54.188.89.84/ghost/');
    }

}

export default new InitGhost();