//Importando readline
const readline = require('readline-sync');

let numero1 = readline.questionFloat("Digite o Número 1: ");
let numero2 = readline.questionFloat("Digite o Número 2: ");
let numero3 = readline.questionFloat("Digite o Número 3: ");
let numero4 = readline.questionFloat("Digite o Número 4: ");
let calculo = (numero1 * numero2) - (numero3 * numero4);

//Saida 
console.log(`A Diferença é ${calculo.toFixed(1)}`);