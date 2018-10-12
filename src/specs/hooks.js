describe('Main', () => {
    // Roda uma vez antes do bloco
    before(() => {
        console.log('before');
        // iniciar conexão no banco
        // iniciar conjunto de dados
    });

    // Roda uma vez após o bloco
    after(() => {
        console.log('after');
        // encerrar conexão no banco
        // encerrar conjunto de dados
    });

    // Roda todas as vezes antes de cada bloco
    beforeEach(() => {
        console.log('beforeEach');
    });

    // Roda todas as vezes após de cada bloco
    afterEach(() => {
        console.log('afterEach');
    });

    it('test 1', () => {
        console.log('teste 1');
    });

    it('test 2', () => {
        console.log('teste 2');
    });
});
