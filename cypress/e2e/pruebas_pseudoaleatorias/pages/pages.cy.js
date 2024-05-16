const login = require('../../login')
const initGhost = require('../../init_ghost')

context('AGREGAR NOMBRE DEL ESCENARIO', () => {

    beforeEach(() => {
       initGhost.visitGhost();
    });

    it('AGREGAR PRUEBA DEL ESCENARIO',() => {
        login.signinEvent();

    });
});