const readline = require('readline-sync');

// Entrada
let numero1 = readline.questionInt("Digite o inicio do intervalo: ");
let numero2 = readline.questionInt("Digite o fim do intervalo: ");

// Processamento e saída
for (let i = numero1; i <= numero2; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`${i} é multiplo de 3 e 5`);
  }
}