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

// Métodos para string
{
    const text = 'Mussum Ipsum, cacilds vidis litro abertis.';

    // Verifica o inicio da string, retorna TRUE ou FALSE
    console.log(text.startsWith('ssum', 2)); // False

    // Verifica o fim da string, retorna TRUE ou FALSE
    console.log(text.endsWith('tis.', 42)); // True

    // Repete a string referênciada
    console.log('lol'.repeat(10));

    // Verifica se existe dentro da string
    console.log(text.includes('alallala')); // false
}

// Array from
{
    const text = 'Lucas';
    console.log(Array.from(text));


    const list = document.querySelectorAll('#list li');
    const listArray = Array.from(list);
    console.log(listArray);

    const names = listArray.map(name => name.textContent);

    console.log(names);
}

// Array off
{
    const array = Array.of(1, 4, 'Lucas', { surname: 'Silva' });

    // Agrupa dados por tipo e popula array
    console.log(array);
}

// Array find e Array index
{
    const data = [
        {
            name: 'Lucas',
            age: '19',
            city: 'São Paulo',
        },
        {
            name: 'Pedro',
            age: '20',
            city: 'Rio de Janeiro',
        },
    ];

    const sampleArray = [4, -5, 0, -1];

    const underZero = sampleArray.find(x => x < 0);

    const underZeroIndex = sampleArray.findIndex(x => x < 0);

    console.log(underZero);
    console.log(underZeroIndex);


    const lucas = data.find(person => person.name === 'Lucas');
    const lucasIndex = data.findIndex(person => person.name === 'Lucas');

    console.log(lucas);
    console.log(lucasIndex);
}


// Array fill
{
    const arr = new Array(50);
    arr.fill('lol', 3, 6);

    console.log(arr);

    const newArr = [1, 2, 3, 4, 5, 6];
    newArr.fill('lol', 1, 3);
    console.log(newArr);
}


// Destructuring
{
    const data = {
        name: 'Lucas',
        age: '19',
        city: 'São Paulo',
        blog: 'https://www.krcodedev.com',
        social: {
            twitter: '@madmerlin',
            facebook: '/madmerlin',
        },
    };

    // errado
    // const name = data.name;
    // const age = data.age;
    // const twitter = data.social.twitter;

    // correto
    const { name, age } = data;
    console.log(name, age);

    // Define uma variável a ser atribuido o valor
    const { facebook: fb } = data.social;
    console.log(fb);

    // Define um valor padrão para váriavel
    const { city = 'São Paulo' } = data;
    console.log(city);
}

// Destructuring no Array
{
    const arr = ['Lucas', 'Silva', 19, 'São Paulo'];

    const [name, surname, age, city] = arr;

    console.log(`Hi my name is ${name} ${surname}, i'am ${age} years old, and i live in ${city}`);
}

// swap de variáveis com destructuring
{
    let a = 19;
    let b = 42;

    [a, b] = [b, a];
}

// Spread Operator
{
    const front = ['react', 'vue', 'angular'];
    const back = ['python', 'ruby', 'nodeJs'];

    // Apresenta os valores do array
    console.log([...front]);
    console.log([...back]);


    // Concatena dois arrays e adiciona um valor entre eles
    const fullStack = [...front, 'RxJS', ...back];

    console.log(fullStack);
}

// Spreads dentro de funções
{
    function makeSandwich(bread, cheese, sauce) {
        console.log(`You sandwich with ${bread} bread, ${cheese} cheese and ${sauce} is done!`);
    }

    const ingredients = ['White', 'cheddar', 'barbecue'];

    makeSandwich(...ingredients);
}

// Rest Params
{
    function multiply(mult, ...args) {
        return args.map(arg => arg * mult);
    }
    console.log(multiply(1, 2, 3, 4, 5, 6, 7));
}

// Promisses
{
    const defer = new Promise((resolve, reject) => {
        if (true) {
            resolve('Hello it works');
        } else {
            reject(new Error('Error!'));
        }
    });

    defer.then(data => console.log(data))
        .catch(err => console.log(err));
}

// Promisses - 2
{
    const posts = fetch('https://willianjusten.com.br/searchsss.json');

    posts
        .then(data => data.json())
        .then(data => data.map((post) => {
            console.log(post.title);
            return post.title;
        }))
        .catch(err => console.log(`Erro: ${err}`));
}

// Promisses - 3, Multiplas Promisses
{
    const currency = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ currency: 'euro', value: 3.50 });
            reject(new Error('Error!'));
        }, 2000);
    });

    const countries = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['Ireland', 'England', 'Scotland']);
            reject(new Error('Error!'));
        }, 600);
    });

    // Roda o comando Then ao terminar todas as promisses especificadas
    Promise
        .all([currency, countries])
        .then((responses) => {
            console.log(responses);
        });

    // Roda o comando Then ao terminar a primeira Promisse especifida, ignorando o restante
    Promise
        .race([currency, countries])
        .then((responses) => {
            console.log(responses);
        });
}


// Herança prototipal ES5
{
    function Animal(kind, sound) {
        this.kind = kind;
        this.sound = sound;
    }

    Animal.prototype.hello = function () {
        console.log(`${this.sound}, I'm a ${this.kind}!`);
    };

    const dog = new Animal('dog', 'Auau');
    const cat = new Animal('cat', 'Meow');

    console.log(dog);
    console.log(cat);
}

// Classes do ES6
{
    class Animal {
        constructor(kind, sound) {
            this.kind = kind;
            this.sound = sound;
        }

        hello() {
            console.log(`${this.sound}, I'm a ${this.kind}!`);
        }

        static info() {
            console.log('This is a class to create animals!');
        }

        get name() {
            console.log('My name is Lucas!');
        }

        set nickName(nick) {
            this.nick = nick;
        }
    }

    const dog = new Animal('dog', 'Auau');
    const cat = new Animal('cat', 'Meow');

    console.log(dog.hello());
    console.log(cat.hello());
}

// Extendeds Classes
{
    class Animal {
        constructor(name) {
            this.name = name;
        }

        hello() {
            console.log(`I'm ${this.name}!`);
        }
    }
    class Dog extends Animal {
        constructor(name, sound) {
            super(name);
            this.sound = sound;
        }

        bark() {
            console.log(`${this.sound} I'm ${this.name}!`);
        }
    }
    const elephant = new Animal('Dumbo');
    const dog = new Dog('Spike', 'Auau');
    console.log(elephant.hello());
    console.log(dog.bark());
}

// Symbol
{
    // Apesar de valores iguais, as váriaveis são diferentes
    const foo = Symbol('name');
    const bar = Symbol('name');

    const obj = {
        [Symbol(name)]: 'Lucas',
        [Symbol(age)]: 19,
        city: 'São Paulo',
    };

    console.log(Object.keys(obj)); // Return City Only

    const symbols = Object.getOwnPropertySymbols(obj);
    const data = symbols.map(sym => obj[sym]);
    console.log(data);
}

// Interators e Interables - for of
{
    const txt = 'Ireland'; // iterable
    const it = txt[Symbol.iterator](); // iterator

    for (letter of txt) {
        console.log(letter);
        if (letter == 'a') break;
    }
}

// Generators
{
    function* genNames() {
        yield 'Lucas';
        yield 'Silva';
        yield 'Lulu';
    }

    const names = genNames();
    console.log(names.next());
    console.log(names.next());
    console.log(names.next());
}

// Genarators on Ajax
{
    function ajax(url) {
        fetch(url)
            .then(data => data.json())
            .then(data => dados.next(data));
    }

    // https://willianjusten.com.br/search.json
    // https://api.github.com/users/willianjusten

    function* ajaxGen() {
        console.log('Buscando posts...');
        const posts = yield ajax('https://willianjusten.com.br/search.json');
        console.log(posts);
        console.log('Buscando dados github...')
        const github = yield ajax('https://api.github.com/users/willianjusten');
        console.log(github);
        console.log('Buscando dados github 2...')
        const github2 = yield ajax('https://api.github.com/users/willianjusten');
        console.log(github2);
    }
    const dados = ajaxGen();
    dados.next();
}
// Proxy
{
    // Altera o comportamento ou adiciona comportamentos adicionais ao objeto (caso do exemplo)
    const obj = {
        name: 'Lucas',
        age: 19,
    };

    const proxy = new Proxy(obj, {
        get(target, name) {
            console.log('Alguém está pedindo o nome');
            return target[name];
        },

        set(target, name, value) {
            console.log('Alguém está mudando o nome');
            target[name] = value;
        }
    });
}

// Set
{
    const mySet = new Set(['lucas', 'silva', 'campos']);

    // adiciona, não repete valores exatamente iguais
    mySet.add('Thiago');
    mySet.add('Gabriel');
    mySet.add('thiago');

    // Deleta, apaga o valor especificado, não retorna erro caso não exista o valor
    mySet.delete('silva');

    // Verifica existencia do valor
    mySet.has('campos'); // true

    // ele não pode ser usado com indice

    // ele também é um iterator, e recebe algumas de suas funções como:

    const it = mySet.values();
    it.next();

    for (name of it) {
        console.log(name);
    }
}


// WeakSet
{
    const obj = {
        name: 'Lucas',
        age: 19,
    };
    const obj2 = {
        name: 'Silva',
        age: 22,
    };
    const obj3 = {
        name: 'costa',
        age: 27,
    };e

    // não aceita tipos premitivos
    const ws = new WeakSet([obj, obj2]);

    // adiciona objeto
    ws.add(obj3);

    // apaga objeto
    ws.delete(obj3);

    // verifica existencia
    ws.has(obj3); // false

    // similar ao set, ele agrupa objetos
}

// Map
{
    const m = new Map();
    m.set('Lucas', 19);
    m.set('Pedro', 20);
    m.set('Silva', 21);

    // deleta valores
    m.delete('Lucas');

    // esse aceita as funções de iterator
    const it = m.values();
    it.next();
}

// WeakMap
{
    // Apenas mapeia, se o objeto for deletado ele some junto de todo o escopo
    const obj = {
        name: 'Lucas',
        age: 19,
    };
    const obj2 = {
        name: 'Silva',
        age: 22,
    };

    const wm = new WeakMap();
    wm.set(obj, 'Info do Lucas');
    wm.set(obj2, 'Info do Silva');
}


// ES7 e ES8

// Async e Await
{
    const getPosts = () => {
        return fetch('https://willianjusten.com.br/search.json')
            .then(data => data.json())
            .then(data => data.map((post) => {
                console.log(post.title);
            }));
    };

    // metodo Async
    async function getPostsAsync() {
        const response = await fetch('https://willianjusten.com.br/search.json');
        const data = await response.json();
        // o Await faz com que ele aguarde a requisição estar pronta
        return data.map((post) => {
            console.log(post.title);
        });
    }

    getPosts();
    getPostsAsync();
    // Async/await funciona obrigatóriamente como promisses
    // Async deve ser usado no inicio de uma funciton
    // Await é usado para avisar a função para esperar o resultado da Promisse
    // Await só pode ser usado para uma função com async
    // Async/await ja está funcional em quase todos os Browsers e NodeJS

    // Vantagens e desvantagens
    // O código fica mais simplificado
    // Mais fácil de debugar por ter menos callbacks
    // A conversão de uma promisse para Async/Await é bem simples
    // O código fica com menos encadeamento
}


// Tratando erros em async/await
{
    // metodo Async
    async function getPostsAsync() {
        try {
            const response = await fetch('https://willianjusten.com.br/search.json');
            const data = await response.json();
            // o Await faz com que ele aguarde a requisição estar pronta
            return data.map((post) => {
                console.log(post.title);
            });
        } catch (err) {
            console.error('Deu errado:', err);
        }
    }
    getPostsAsync();
}

// Diversas requisições com Async/Await
{
    async function getUsers() {
        const lucas = fetch('https://api.github.com/users/madmerlln').then(r => r.json());
        const jhow = fetch('https://api.github.com/users/JhonataMorais').then(r => r.json());

        // ele adicionará as duas requisições a variavel quando estiverem prontas
        const promisses = await Promise.all([lucas, jhow]);
        console.log(promisses);
    }
    getUsers();

    async function getUsersRefactor(users) {
        // Realiza uma requisição para cada usuario passado no parametro
        // e retorna após realizar tratamento
        const promisses = users.map(user => fetch(`https://api.github.com/users/${user}`).then(r => r.json()));
        const people = await Promise.all(promisses);
        console.log(people);
    }
    getUsersRefactor(['madmerlln', 'JhonataMorais', 'LucasRuy']);
}

// padStart e padEnd
{
    const text = '1';
    const text2 = '1000';
    // String.prototype.padStart/padEnd
    console.log(text.padStart(5, 'hi'));
    console.log(text2.padEnd(10, '0'));

    // A string que recebe a função recebe os caracteres especificados antes
    // ou após a mesma de acordo com o número de caracteres especificados.
}

// Exponentiation
{
    const number = 2;
    // Antigo
    // console.log(Math.pow(number, 1));

    // Novo
    console.log(number ** 3);
}

// Array.prototype.include
{
    // Verifica se um valor está incluso no array

    const arr = [1, 2, 3];
    // Antigo
    console.log(arr.indexOf(5) > -1);

    // Novo
    console.log(arr.includes(3));
}

// Object.entries
{
    const animals = {
        camel: 3,
        llama: 2,
        alpaca: 5,
    };

    console.log(Object.entries(animals));

    // é separado por chave e valor oque permite que
    // tenha maior dinamica utilizando os compandos de Map
}

// Object.values
{
    const animals = {
        camel: 3,
        llama: 2,
        alpaca: 5,
    };
    console.log(Object.values(animals).reduce((a, b) => a + b));

    // Retorna os valores do objeto
}

// Tralling Commas
{
    // deixar a virgula no ultimo valor correto para facilitar inserções
    const arr = [
        1,
        2,
        3,
    ];

    // é possível agora deixar também a virgula após o ultimo parametro da função
    function showArr(arrToShow,) {
        console.log(arrToShow);
    }
    showArr(arr);
}

