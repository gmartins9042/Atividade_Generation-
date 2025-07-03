const readline = require('readline-sync');

let numero;
let soma = 0;

do {
    numero = readline.questionInt("Digite um numero (0 para sair): ");

    if (numero > 0) {
        soma += numero; 
    }

} while (numero !== 0);

console.log(`A soma dos numeros positivos e: ${soma}`);
