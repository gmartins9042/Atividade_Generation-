//Importando readline
const readline = require('readline-sync');

//Entrada
let salarioBruto = readline.questionFloat("Digite seu Salario Bruto: ");
let adicionalNoturno = readline.questionFloat("Digite seu Adicional Noturno: ");
let horaExtras = readline.questionFloat("Digite suas Horas Extras: ");
let descontos = readline.questionFloat("Digite o Descontos: ");
let salarioLiquido = salarioBruto + adicionalNoturno + (horaExtras * 5) - descontos;

//Limpa
console.clear();

//Saida 
console.log(`======= FOLHA DE PAGAMENTO =======`);
console.log(`Salário Bruto      : R$ ${salarioBruto.toFixed(2)}`);
console.log(`Adicional Noturno  : R$ ${adicionalNoturno.toFixed(2)}`);
console.log(`Horas Extras       : ${horaExtras} x R$5.00`);
console.log(`Descontos          : R$ ${descontos.toFixed(2)}`);
console.log(`-----------------------------------`);
console.log(` Salário Líquido   : R$ ${salarioLiquido.toFixed(2)}`);