// 1 - Variáveis
let nome = "Gustavo";

console.log(nome);
// Isso é o mesmo que console.log("Gustavo");

nome = "Gustavo Prado Costa";
console.log(nome);
// As variáveis do tipo let podem ser reatribuídas, ou seja, podemos mudar o valor da variável durante a
// execução do programa.

// 2 - Constante
const idade = 18;
//const idade = 19; Isso vai gerar um erro, pois não podemos reatribuir esse valor da constante idade.
console.log(idade);
// Por outro lado, as variáveis do tipo const não podem ser reatribuídas, ou seja, uma vez que um 
// valor é atribuído a uma variável const, ele não pode ser alterado durante a execução do programa. 

// Podemos criar várias variáveis de uma vez:
let a = 5, b = 6, c = 7;

// Não podemos utilizar alguns caracteres especiais como @, também não é possível criar variáveis
// que iniciem com números.
// let 2a = 5; (isso é inválido)

// Existem símbolos que são permitidos para criar variáveis, como _ e $:
_algo = "algo";
$algo = "algo";

// // 3 - Prompt
// const age = prompt("Digite a sua idade: ");
// console.log(`Você tem ${age} anos.`);

// // 4 - Alert
// alert("Testando");
// const z = 10;
// alert(`O número é ${z}`);

// 5 - Math
console.log(Math.max(6, 3, 4, 6, 8, 2, 3, 1, 5)); // o math.max mostra o maior número da sequência
console.log(Math.floor(5.15)); // o math.floor arredonda o número com vírgula para baixo
console.log(Math.ceil(3.6)); // o math.ceil arredonda o número com vírgula para cima

// 6 - Console
console.log("teste");
console.error("erro"); // erro
console.warn("Aviso!"); // aviso

// 7 - Estruturas de controle

// 7.1 - If
const m = 4;

if(m > 5) {
    console.log("M é maior que 5");
}
const user = "João";

if(user === "João") {
    console.log("Olá João!");
}

// 7.2 - Else
if(m > 5) {
    console.log("M é maior que 5")
}
else {
    console.log("O M não é maior que 5")
}

const loggedIn = false;

if(loggedIn) { //isso é o mesmo que (loggedIn === true)
    console.log("Está autenticado!");
}
else {
    console.log("Não está autenticado!");
}

const q = 10;
const w = 25;

if (q > 5 && w > 20) {
    console.log("Números mais altos");
} else {
    console.log("Os números não são mais altos");
}

// 7.3 - Else if
if( 1 > 2 ) {
    console.log("teste");
} else if ( 2 > 3) {
    console.log("teste 2");
} else {
    console.log("teste 3")
}

// 8 - Estruturas de repetição

// 8.1 - While
let p = 0;

while(p <= 5) {
    console.log(`Repetindo ${p}`);
    p = p + 1;
}

// 8.2 - Loop infinito
// let x = 0;

// while(x < 10) {
//     console.log(`Repetindo ${x}`)
// }

// 8.3 - Do while
let o = 10;
do {
    console.log(`Valor de o: ${o}`);
    o--
} while(o >= 1);

// 9 - For
for(let t = 0; t < 10; t++) { // o for permite fazer tudo em uma linha só
    console.log(`Repetindo número ${t}`);
}

let r = 10
for(r; r > 0, r = r - 1;) {
    console.log(`O número está diminuindo: ${r}`);
}

// 10 - Forçando a saída do loop - break

for(let g = 20; g > 10; g--) {
    console.log(`O valor de g é: ${g}`);
    if(g === 12) {
        console.log("O g é 12!");
        break;
    }
}

// 11 - Pulando uma execução do loop - Continue
for(let s = 0; s < 10; s = s + 1) {
 // Operador resto = %
 if( s % 2 === 0) {
    console.log("Número par")
    continue
 }
 console.log(s);
}

// 12 - Switch
const job = "Programador";

switch(job) {
    case "Programador":
        console.log("Você é um programador");
        break;
    case "Advogado":
        console.log("Você é um advogado");
        break;
    case "Engenheiro":
        console.log("Você é um engenheiro");
        break;
    default:
        console.log("Profissão não encontrada");
}

// Switch "errado"
const l = 100;

switch(l) { // aqui não foi usado o break, então tudo continua sendo executado mesmo ja tendo batido o verdadeiro
    case 200: 
        console.log("L é 200!");
    case 100: 
        console.log("L é 100!");
    case 10: 
        console.log("L é 10!");
    default:
        console.log("L não foi encontrado");
}