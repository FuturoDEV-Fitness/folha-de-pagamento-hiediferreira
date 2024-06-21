/*
    Exercício 01: Dado um array de números, crie uma função que retorne um novo array, contendo apenas os números pares.
*/
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numerosPares = numeros.filter((num) => {
    return num % 2 ==0
})

console.log(numerosPares)

/**
    Exercicio 02: Dado um array de objetos representando pessoas com propriedades nome e idade, crie uma função que retorne um array contendo apenas os nomes das pessoas com idade maior ou igual a 18 anos.
*/

function filtrarAdultos(pessoas) {
    let maior18 = pessoas.filter((pessoa) => 
        pessoa.idade >= 18
    )

    return console.log(maior18)
}

let pessoas = [
{ nome: 'Alice', idade: 17 },
{ nome: 'Bob', idade: 22 },
{ nome: 'Charlie', idade: 16 },
{ nome: 'David', idade: 19 }
];

filtrarAdultos(pessoas)

/**
    Exercício 03: Dado um array de objetos representando produtos com propriedades categoria e preco, crie uma função que agrupe os produtos por categoria e calcule o preço total de cada categoria.
*/

let produtos = [
    { categoria: 'eletrônicos', preco: 99.99 },
    { categoria: 'livros', preco: 19.99 },
    { categoria: 'eletrônicos', preco: 199.99 },
    { categoria: 'livros', preco: 29.99 },
    { categoria: 'roupas', preco: 549.99 }
];

let produtos2 = [
    { categoria: 'eletrônicos', preco: 100 },
    { categoria: 'livros', preco: 20 },
    { categoria: 'eletrônicos', preco: 200 },
    { categoria: 'livros', preco: 30 },
    { categoria: 'roupas', preco: 600 },
    { categoria: 'roupas', preco: 422.30 }

];

function agruparPorCategoria(produtos) {
    let eletronicos = produtos.filter((item) => 
        item.categoria === 'eletrônicos'
    )

    let totalEletronico = 0;

    eletronicos.forEach(item => {
        totalEletronico += item.preco;
    })

    let livros = produtos.filter((item) => 
        item.categoria === 'livros'
    )

    let totalLivros = 0;

    livros.forEach(item => {
        totalLivros += item.preco;
    })

    let roupas = produtos.filter((item) => 
        item.categoria === 'roupas'
    )

    let totalRoupas = 0;

    roupas.forEach(item => {
        totalRoupas += item.preco;
    })

    return console.log(`Eletronicos: R$${totalEletronico} \nLivros: R$${totalLivros} \nRoupas: R$${totalRoupas}`)
}

agruparPorCategoria(produtos2)

// OU:
function teste(produtos){
    let eletronicos = produtos.filter((item) => 
        item.categoria === 'eletrônicos'
    )
    const totalPrice = eletronicos.reduce((total, item) => 
        total + item.preco, 0)

    return totalPrice
}

console.log(teste(produtos2))

/**
    Funções que Retornam Funções (Closures)
    Exercício 04: Crie uma função contador que retorna uma outra função que incrementa um valor interno e retorna o valor atualizado a cada chamada.
*/

function contador() {
    let contagem = 0
    return function(){
        contagem += 1
        return contagem
    }
}

// let contador1 = contador();
// console.log(contador1()); // 1
// console.log(contador1()); // 2
// console.log(contador1()); // 3

// let contador2 = contador();
// console.log(contador2()); // 1
// console.log(contador2()); // 2

// console.log(contador1())

/*
    Exercício 05: Dado um array de números, crie uma função que use reduce para calcular o produto de todos os números no array.
*/

let numerosArray = [1, 2, 3, 4, 5];
function calcularProduto(numeros) {
    let produto = numeros.reduce((total, valor) => {
        return total * valor
    }, 1)

    return console.log(produto)
}

calcularProduto(numerosArray)

/**
    Funções de alta ordem
    Exercício 06: Crie uma função transformarArray que recebe um array e uma função de transformação, e retorna um novo array, onde cada elemento é o resultado da aplicação da função de transformação ao elemento correspondente do array original.
*/

let numerosAltaOrdem = [1, 2, 3, 4, 5, 15];

function transformarArray(array, transformacao) {
    return transformacao(array)
}
    
function dobrar(numero3) {
    let dobro = numero3.map(valor => 
        valor * 2
    )  
    return dobro
}

console.log(transformarArray(numerosAltaOrdem, dobrar))

/*
    Composição de funções
    Exercício 07: Crie uma função compor que recebe duas funções f e g e retorna uma nova função que é a composição de f e g (ou seja, f(g(x))).
*/

function compor(f, g) {
    return function (valor){
        return f(g(valor))
        //Multiplica por 2 e soma 1
    }
}

function somar1(x) {
    return x + 1;
}

function multiplicar2(x) {
    return x * 2;
}

let funcaoComposta = compor(somar1, multiplicar2);
console.log(funcaoComposta(5));