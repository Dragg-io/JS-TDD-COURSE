// DESCRIBE descreve um teste e adiciona um bloco do texto
describe('Main', () => {
    describe('Method A', () => {
        // .only, o teste rodará apenas aqui
        context.only('Case 1', () => {
            it('Should Happen blabla', () => {
                // espera que aconteça
                // Entre de dados / método sum(2, 2)
                // Espera retornar (4) => true | (3) => false => broken test
            });
        });
        // .skip, ignora o teste desse bloco
        context.skip('Case 1', () => {
            it('Should Happen blabla', () => {
                // espera que aconteça
                // Entre de dados / método sum(2, 2)
                // Espera retornar (4) => true | (3) => false => broken test
            });
        });
    });
});
