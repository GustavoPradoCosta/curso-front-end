// 1- number
console.log(typeof 2);
console.log(typeof 1.5);
console.log(typeof -122);

// 2- Operações lógicas
console.log(2+4);
console.log(2+(4*3));
console.log(10/2)
console.log(4-2)

// 3- Números Especiais
console.log(typeof Infinity);
console.log(typeof -Infinity);
console.log(12 * "asd");
console.log(typeof NaN);

// 4- Strings
console.log("Um texto");
console.log('Um outro texto')
console.log(typeof "Um texto");

// 5- Símbolos especiais em string
console.log("Testando a \n quebra de linha")
console.log("Espaçamento de \t tab")

// 6- Concatenação
console.log("Oi, " + "tudo " + "bem?");

// 7- Interpolação
console.log(`A soma de 2 + 2 é: ${2 + 2 }`);
console.log(`Podemos executar qualquer coisa aqui ${'"teste"'}`);

// 8- Boolean
console.log(true);
console.log(false);
console.log(5 > 2);
console.log(5 < 2);
console.log(5 == 5);
console.log(5 != 5);

// 9- Comparações
console.log(5 > 2);
console.log(5 < 2);
console.log(5 >= 5);
console.log(5 <= 4);
console.log(5 == 5);
console.log(5 != 5);

// 10- Comparação de idênticos
console.log( 9 == "9");
console.log( 9 === '9');
console.log( 9 != "9");
console.log( 9 !== "9");

// 11- Operadores Lógicos
console.log(true && true); // && significa "e"
console.log(true && false); 
console.log(false && false);
console.log( 5 > 2 && 2 < 10);
console.log( 5 > 2 && "Gustavo" === 1);
console.log( 5 > 2 || "Gustavo" === 1); // || significa "ou"
console.log( 5 < 2 || 5 > 100);
console.log( !true); // ! significa "não" ou seja, é um negador
console.log( !5 > 2 );

// 12 - Empty values
console.log(typeof null, typeof undefined);
console.log(null === undefined);
console.log(null == undefined);
console.log(undefined == false);
console.log(null == false);

// 13 - Conversão de tipos automática
console.log( 5 + "5");
console.log( 5 * null);
console.log( "teste" * "outro teste");
console.log( 10 - "2");
console.log( 10 + "2");