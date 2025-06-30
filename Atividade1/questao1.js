// Importando readline 
const readline = require('readline-sync');


//Entrada 
let salario = readline.questionFloat("Digite seu Salario: ");
let abono = readline.questionFloat("Digite seu abono: ");
let novoSalario = (salario + abono );

//Lmpa
console.clear();

//Saida
console.log(`*******PAGAMENTO*******`);
console.log(`Sálario : R$ ${salario.toFixed(2)}`);
console.log(`Abono   : R$ ${abono.toFixed(2)}`);
console.log(`Total   : R$ ${novoSalario.toFixed(2)}`);



