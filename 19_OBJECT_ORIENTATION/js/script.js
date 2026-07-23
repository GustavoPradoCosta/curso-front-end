// Metodos
// eles sao como propriedades que podem ser adicionados a objetos,
// mas contém uma funçao, invocamos metodos do mesmo modo que funções
const animal = {
    latir: function() {
        console.log("Au au");
    },
};
animal.latir();

console.log("-------------------------------------------------- \n--------------------------------------------------");

// Aprofundando em métodos
// os métodos sao utilizados para interagir também com as propriedades do objeto
// podemos exibir elas ou modifica-las
const pessoa = {
    nome: "Gustavo",
    getNome: function() {
        return this.nome;
    },
    setNome: function(novoNome) {
        this.nome = novoNome
    }
};

console.log(pessoa.nome);
console.log(pessoa.getNome());

pessoa.setNome("Henrique");

console.log(pessoa.getNome());

console.log("-------------------------------------------------- \n--------------------------------------------------");

// Prototypes
//os objetos pais herdam propriedades e métodos aos filhos
const text = "ads";
console.log(Object.getPrototypeOf(text));

const bool = true;
console.log(Object.getPrototypeOf(bool));

const arr = [];
console.log(arr.length);
console.log(Object.getPrototypeOf(arr));

console.log("-------------------------------------------------- \n--------------------------------------------------");

//quando criamos um objeto a partir de outro, este outro será 
//o prototype do objeto criado
const myObject = {
    a: "b"
};
console.log(Object.getPrototypeOf(myObject));

console.log(Object.getPrototypeOf(myObject) === Object.prototype);

const mySecondObject = Object.create(myObject);

console.log(mySecondObject);

console.log(Object.getPrototypeOf(mySecondObject) === myObject);

console.log("-------------------------------------------------- \n--------------------------------------------------");
//classes básicas
//é um molde de objetos, nela definimos os métodos e propriedades
const cachorro = {
    raca : null
};
const pastorAlemao = Object.create(cachorro);
pastorAlemao.raca = "Pastor Alemão";
console.log(pastorAlemao);
console.log(pastorAlemao.patas);

const bulldog = Object.create(cachorro);
bulldog.raca = "Bulldog";
console.log(bulldog);

console.log("-------------------------------------------------- \n--------------------------------------------------");

// 6 - função com classe - função construtora
function criarCachorro(nome, raca) {
    const cachorro = Object.create({})
    cachorro.raca = nome
    cachorro.raca = raca

    return cachorro
}

const bob = criarCachorro("Bob", "Vira lata");
console.log(bob);

const jack = criarCachorro("Jack", "Poodle");
console.log(jack);

console.log(Object.getPrototypeOf(jack));

// 7 - funções como classe
function Cachorro(nome, raca) {
    this.nome = nome
    this.raca = raca
}

const husky = new Cachorro("Ozzy", "Husky");
console.log (husky);

// 8 - metodos na funçao construtora
Cachorro.prototype.uivar = function() {
    console.log("Auuuuuuuu!");
};

console.log(Cachorro.prototype);

husky.uivar();

// 9 - classes es6
class CachorroClasse {
    constructor(nome, raca) {
        this.nome = nome
        this.raca = raca
    }
}

const jeff = new CachorroClasse("Jeff", "Labrador");
console.log(jeff);

console.log(Object.getPrototypeOf(jeff));

// 10 - mais sobre classes
class Caminhao {
    constructor(eixos,cor) {
        this.eixos = eixos;
        this.cor = cor;
    }
descreverCaminhao() {
    console.log(`Este caminhão tem ${this.eixos} e é da cor ${this.cor}`)
    }
}

const scania = new Caminhao (6, "Vermelho");
console.log(scania);
scania.descreverCaminhao();

Caminhao.motor = 4

const c2 = new Caminhao(4, "Preta");

console.log(c2);

// 11 - override
class Humano {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }
}

const gustavo = new Humano ("Gustavo", 18);
console.log(gustavo);


Humano.prototype.idade = "Não definida";
console.log(gustavo.idade);
console.log(Humano.prototype.idade);

// 12 - symbols em classes
class Aviao {
    constructor(marca, turbinas) {
        this.marca = marca
        this.turbinas = turbinas
    }
}

const asas = Symbol()
const pilotos = Symbol();

Aviao.prototype[pilotos] = 3
Aviao.prototype[asas] = 2

const boeing = new Aviao("Boeing", 10);
console.log(boeing);

console.log(boeing[asas]);

console.log(boeing[pilotos]);

