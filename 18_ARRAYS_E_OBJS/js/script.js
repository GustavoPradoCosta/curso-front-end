// 1 - arrays
const lista = [1, 2, 3, 4, 5];
console.log(lista);
console.log(typeof lista);

const itens = ["Matheus", 1, 2, 3, 4, 5];
console.log(itens);

// 2 - mais sobre arrays
const arr = ["a", "b", "c", "d", "e"];
console.log(arr[0]); // todas as listas começam com o 0, nesse caso o 0 equivale a letra "a"
console.log(arr[2]);
console.log(arr[83]); // aqui colocamos um número inexistente na sequencia, o que leva ao "undefined" no console

// 3 - Proprieties
const number = [5, 3, 6];
console.log(number.length);
console.log(number["length"]);

const myName = "Matheus";
console.log(myName.length);

// 4 - Métodos
const otherNumbers = [1, 2, 3];

const allNumbers = otherNumbers.concat(otherNumbers);

console.log(allNumbers);

const text = "algum texto"

console.log(text.toUpperCase());
console.log(typeof text.toUpperCase());

console.log(text.indexOf("g"));

// 5 - Object Literals
const person = {
    name: "Matheus",
    age:31,
    job: "Programador",
};
console.log(person);
console.log(person.name);
console.log(person.name.length);
console.log(typeof person);

// 6 - criando e deletando propriedades
const car = {
    engine: 2, 
    brand: "VW",
    model: "Tiguan",
    km: 20000,
};
console.log(car);

car.doors=4; // adicionando itens no objeto

console.log(car);

delete car.km; // deletando itens do objeto
console.log(car);
console.log(typeof car);

// 7 - diferença entre array e objetos
//  Arrays são utilizados como listas de itens, geralmente todos possuem o mesmo tipo;
//  Já os objetos são utilizados para descrever um item, contém as informações do mesmo, e as
// propriedades possuem diferentes tipos de dados;
//  Podemos ter também um array de objetos, isso é muito utilizado.

// 8 - mais sobre objetos

const obj = { 
    a: "Teste",
    b: true,
};
console.log(obj instanceof Object);

const obj2 = {
    c: [],
};
Object.assign(obj2, obj); // juntando os objetos com Object.assign

console.log(obj2);

// 9 - Conhecendo melhor os objetos

console.log(Object.keys(obj));
console.log(Object.keys(obj2));
console.log(Object.keys(car));

console.log(Object.entries(car));

// 10 - Mutação
const a = {
    name: "Matheus"
};
const b = a;

console.log(a);
console.log(b);

console.log(a === b);

a.age = 31;
console.log(b);
console.log(a);

delete b.age;
console.log(b);
console.log(a); // o "a" sofreu mutação com o "b", quando excluimos do "b", também foi excluido do "a"

// 11 - Loop em array
const users = ["Matheus", "Luan", "Gustavo"];

for (let i = 0; i < users.length; i++) {
    console.log(`Listando o usuário ${users[i]}`);
}

// 12 - push and pop
const array = ["a", "b", "c"];
array.push("d"); // add itens no fim da lista

console.log(array);
console.log(array.length);

array.pop(); // remove itens do fim da lista

console.log(array);

const itemRemovido = array.pop()

console.log(itemRemovido);

console.log(array);

array.push("z", "x", "y");
console.log(array);

// 13 - shift and unshift
const letters = ["a", "b", "c"];
const letter = letters.shift() // remove itens no início da lista

console.log(letter);
console.log(letters);

letters.unshift("p", "o", "y"); // add itens no início da lista
console.log(letters);

// 14 - indexOf e lastIndexOf
const myElement = ["Morango", "Maça", "Abacate", "Pêra", "Morango"];

console.log(myElement.indexOf("Maça"));
console.log(myElement.indexOf("Morango"));

console.log(myElement[2]);
console.log(myElement[myElement.indexOf("Morango")]);
console.log(myElement.lastIndexOf("Morango"));

console.log(myElement.indexOf("Mamão")); // quando o item não existe, ele retorna um número negativo, no caso -1
console.log(myElement.lastIndexOf("Mamão")); // o mesmo acontece com lastIndexOf

// 15 - array: slice
const testSlice = ["a", "b", "c", "d", "e"];
const subArray = testSlice.slice(2,4);

console.log(testSlice);
console.log(subArray);

const subArray2 = testSlice.slice(2, 4 + 1);
console.log(subArray2);

const subArray3 = testSlice.slice(10, 20);
console.log(subArray3); // como esses itens (10 ao 20) nao existem, dá uma lista vazia

const subArray4 = testSlice.slice(2);
console.log(subArray4);

// 16 - forEach 
const nums = [1, 2, 3, 4, 5, 6, 7];
nums.forEach((numero) => {
    console.log(`O número é ${numero}`);
});

const posts = [
    {title: "Primeiro post", category: "PHP"},
    {title: "Segundo post", category: "JavaScript"},
    {title: "Terceiro post", category: "Python"},
];

posts.forEach((posts) => {
    console.log(`Exibindo post: ${posts.title}, da categoria ${posts.category}`);
});

// 17- Includes
// verifica se o item está incluso no array e retorna true ou false
const brands = ["BMW", "VW", "Fiat"];
console.log(brands.includes("Fiat"));
console.log(brands.includes("KIA"));

if(brands.includes("BMW")) {
    console.log("Há carros da marca BMW!")
}

// 18- Reverse
// inverte a ordem da lista
const reversteTest = [1, 2, 3, 4, 5];
reversteTest.reverse();
console.log(reversteTest);

// Metodos de string

// 19- Trim
//remove tudo que não é texto em uma strig

const trimTest = "   testando \n     ";

console.log(trimTest);
console.log(trimTest.trim());

console.log(trimTest.length);
console.log(trimTest.trim().length);

// 20- padStart

//insere um texto no começo da string e repete até a string completar o número de caracteres indicados,
//no caso 4
const testePadStart = "1";
const newNumber = testePadStart.padStart(4, "0");

console.log(testePadStart);
console.log(newNumber);
// padEnd
//insere um texto no final da string até a string completar o número indicado, no caso 10
const testePadEnd = newNumber.padEnd(10, "0");

console.log(testePadEnd);

// 21- split
// o split divide uma string em um array, pode ser separado por espaços, vírgulas e ponto virgulas

const frase = "O rato roeu a roupa do rei de roma";
const arrayDaFrase = frase.split(" ");
console.log(arrayDaFrase);

// 22- join
// ele une um array em uma string, além de poder colocar um separador também
const fraseDenovo = arrayDaFrase.join(" ");
console.log(fraseDenovo);

const itensParaComprar = ["Mouse", "Teclado", "Monitor"];
const fraseDeCompra = `Precisamos comprar: ${itensParaComprar.join(", ")}.`;
console.log(fraseDeCompra);

// 23- repeat
//o repeat repete um texto "n" vezes
const palavra = "Testando ";
console.log(palavra.repeat(5));

// 24- rest Operator
//podemos utiliza-lo para receber indefinidos argumentos em uma função, assim não precisamos declarar
//exatamente o que vamos receber, deixando a função mais ampla
const somaInfinita = (...args) => {
let total = 0;
for(let i = 0; i < args.length; i++) {
    total += args[i]
}
return total;
};

console.log(somaInfinita(1, 2, 3));

console.log(somaInfinita(1, 20, 34, 3424, 128845, 12723, 23, 45, 3425));

// 25- for...of
// é uma estrutura de repetição semelhrante ao for, porém mais simples
// o número de repetição é baseado no array utilizado e podemos nos referir
// aos elementos sem precisar acessar o índice dele
const somaInfinita2 = (...args) => {
    let total = 0;

    for(let num of args) {
        total += num;
    }
    return total;
};

console.log(somaInfinita2(1, 2, 3));
console.log(somaInfinita2(5, 3, 56, 1234, 325, 234, 34));

// 26- destructuring in objects
// é uma funcionalidade que nos permite desestruturar algum dado, no caso
// é possível criar variáveis a partir das suas propriedades, com uma simpes sintaxe
const userDetails = {
    firstName: "Gustavo",
    lastName: "Costa",
    job: "Developer"
}

const {firstName, lastName, job} = userDetails

console.log(firstName, lastName, job);

//renomear variáveis
const {firstName: primeiroNome} = userDetails;
console.log(primeiroNome);

// 27- Destructuring in arrays
const myList = ["Avião", "Submarino", "Carro", "Trator"];

const [veiculoA, veiculoB, veiculoC, veiculoD] = myList;
console.log(veiculoA, veiculoB, veiculoC, veiculoD);

// 28- JSON 
//usamos para comunicação entre API e front-end
const myJson = '{"name": "Gustavo", "age": 18, "skills": ["PHP", "JavaScript", "Python"]}';
console.log(myJson);

// 29- JSON para objeto e objeto para JSON
const myObject = JSON.parse(myJson);
console.log(myObject);
console.log(typeof myObject);
console.log(myObject.name);

//JSON inválido
// const badJson = '{"name": Gustavo, "age": 18';
// const badJson = JSON.parse(badJson);
// console.log(badJson);

myObject.isOpenToWork = true;
console.log(myObject);

const myNewJson = JSON.stringify(myObject);
console.log(myNewJson);
console.log(typeof myNewJson);

