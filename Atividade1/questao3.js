//Importando readline
const readline = require('readline-sync');

//Entrada

let salarioBruto = readline.questionFloat("Digite seu Salário Bruto: ");
let adicionalNoturno = readline.questionFloat("Digite seu Adicional Noturno: ");
let horaExtras = readline.questionFloat("Digite suas Horas Extras: ");
let descontos = readline.questionFloat("Digite o Descontos: ");
let salarioLiquido = salarioBruto + adicionalNoturno + (horaExtras * 5) - descontos;

//Saida 

console.log(`Seu salário liquido é de ${salarioLiquido.toFixed(2)}`);
