const readline = require('readline-sync');

//Tabela
console.log("|_____|Codigo|__________|Operacao|_____|");
console.log("|_______ 1 _______________ Soma _______|");
console.log("|_______ 2 _____________ Subtracao ____|");
console.log("|_______ 3 ____________ Multiplicacao _|");
console.log("|_______ 4 ______________ Divisao _____|");

//Entrada
let operador = readline.questionInt("Digite a Operacao: ");
console.clear();
let numero1 = readline.questionFloat("Digite o Numero 1: ");
console.clear();
let numero2 = readline.questionFloat("Digite o Numero 2: ");
console.clear();
let resultado;

switch (operador) {
//Soma
    case 1:
        resultado = numero1 + numero2;
        console.log(`${numero1.toFixed(1)} + ${numero2.toFixed(1)} = ${resultado.toFixed(1)}`);
        break;

//Subtracao
    case 2:
        resultado = numero1 - numero2;
        console.log(`${numero1.toFixed(1)} - ${numero2.toFixed(1)} = ${resultado.toFixed(1)}`);
        break;

//Multiplicacao
    case 3:
        resultado = numero1 * numero2;
        console.log(`${numero1.toFixed(1)} x ${numero2.toFixed(1)} = ${resultado.toFixed(1)}`);
        break;

//Divisao
    case 4:
        resultado = numero1 / numero2;
        console.log(`${numero1.toFixed(1)} / ${numero2.toFixed(1)} = ${resultado.toFixed(1)}`);
        break;

    default:
        console.log("Operacao invalida");
}