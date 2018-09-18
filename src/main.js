// --------- Variables -----------
{
    /* A variável não pode ser declarada novamente,
    porém, se for um objeto, seus valores ainda podem ser alterados */

    const pessoa = {
        name: 'Lucas',
        age: 19,
    };

    // impede que os valores do objeto sejam mudados
    Object.freeze(pessoa);

    pessoa.age = 20;

    console.log(pessoa.age);
}

// --------- Functions -----------
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
    const car = {
        color: 'preto',
        year: 2016,

        sell() {
            return `Você comprou um carro ${this.color}, ano ${this.year}!`;
        },
    };

    // Arrow function pega o contexto geral do bloco pai
    // A function comum pega o contexto do objeto

    console.log(car.sell());
}


// --------- Template Literals -----------
{
    const brasil = {
        live: 'sao paulo',
        love: 'paraná',
    };

    // Errado:
    // const text = 'Eu moro em ' + brasil.live + ' e sou apaixonado por ' + brasil.love + '!';

    // Correto
    const newText = `Eu moro em ${brasil.live} e sou apaixonado por ${brasil.love}`;

    console.log(newText);

    // -----------------------------------------------------------------------------------------

    // Errado
    const fruits = 'banana'
        + '\n'
        + 'orange'
        + '\n'
        + 'apple';
    console.log(fruits);

    // Correto
    const newFruits = `banana
        orange
        apple`;
    console.log(newFruits);
}

// --------- Template Literals HTML fragments -----------
{
    const article = {
        title: 'Aprenda Template Strings',
        intro: 'Uma breve explicação de como se utiliza template strings do ES"em seu código hoje!',
        body: 'Mussum Ipsum, cacilds vidis litro abertis. Mé faiz elementum girarzis, nisi eros vermeio. Si num tem leite então bota uma pinga aí cumpadi! Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis! Cevadis im ampola pa arma uma pindureta.',
        tags: ['es6', 'ejs', 'template-literal'],
        author: 'Lucas Silva',
    };
    const markup = `
        <article>
            <header>
                <h1>${article.title}</h1>
            </header>
            <section>
                <p>${article.intro}</p>
            </section>
            <footer>
                <ul>
                    ${article.tags.map(tag => `<li>${tag}</li>`).join('')}
                </ul>

            </footer>
        </article>
    `;
    document.body.innerHTML = markup;
}

// --------- Tagged Template -----------
{
    const city = 'São Paulo';
    const someThing = 'pollution';
    const otherThing = 'buildings';

    function green(template, ...values) {
        return template.reduce((accumulator, part, i) => ` ${accumulator}
                <span class="green">${values[i - 1].toUpperCase()}</span>
                ${part}`);
    }

    const brasil = green`I live in ${city} the city of ${someThing} and ${otherThing}!`;

    document.body.innerHTML = brasil;
}


// --------- Shorthand Property -----------
{
    const firstName = 'Lucas';
    const surname = 'Silva';
    const age = 19;

    const person = {
        // se as variaves tiverem o mesmo nome não é necessário escrever apenas uma vez:
        firstName,
        surname,
        age,
        // function menor
        hello() {
            console.log(`Hello my name is ${firstName} ${surname} and i'am ${age} years old `);
        },
    };
    person.hello();
}

// --------- Default Parameters -----------
{
    /* Os parametros são definidos com valores padrões, tornando opcional
        definir seu valor ao chamar a função: */
    function hello(name = 'Lucas', surname = 'Silva') {
        console.log(`Hello ${name} ${surname}! How are you?`);
    }

    hello();
    hello('Pedro', 'Campos');
}
