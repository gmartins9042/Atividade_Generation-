// git 
const readline = require('readline-sync');

//Entrada
let nota1 = readline.questionFloat("Digite a Nota 1: ");
let nota2 = readline.questionFloat("Digite a Nota 2: ");
let nota3 = readline.questionFloat("Digite a Nota 3: ");
let nota4 = readline.questionFloat("Digite a Nota 4: ");

let mediaFinal = (nota1 + nota2 + nota3 + nota4)/4;


//Saida 

console.log(`A sua media final foi de ${mediaFinal.toFixed(1)}`);
 