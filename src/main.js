{
    const pessoa = {
        name: 'Lucas',
        age: 19,
    };

    // impede que o objeto seja mudado
    Object.freeze(pessoa);

    pessoa.age = 20;

    console.log(pessoa.age);
}

{
    const brasil = ['são paulo', 'rio de janeiro', 'paraná'];

    /* funções que retornam valor sem tratamento sevem ser em
    uma linha só e não é necessário o return */
    const love = brasil.map(name => `I love ${name}!`);

    const loveChain = brasil
        .filter(name => name === 'São Paulo')
        .map(name => `I love ${name}!`);

    console.log(love);
    console.log(loveChain);
}

{
    const btn = document
}
