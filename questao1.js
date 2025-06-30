// Importando readline 
const readline = require('readline-sync')


//Entrada 
let salario = readline.questionFloat("Digite seu Salario: ");
let abono = readline.questionFloat("Digite seu abono: ");
let novoSalario = (salario + abono );


//Saida
console.log(`Total a receber é de: ${novoSalario.toFixed(2)}`);



