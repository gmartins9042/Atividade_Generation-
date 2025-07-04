//Importar o readline
import readLine = require("readline-sync");

//Lista
const list: Array<string> = new Array<string>();

//Repetição 
for (let i = 1; i <= 5; ++i) {
        list.push(readLine.question("Digite a Cor: "));
}

//Saide
console.log("Lista todas as cores: ");

//Cores em ordem que foi digitada
list.forEach((ordem )=>console.log(ordem));
console.log("");

//Cores ordenadas
list.sort();
console.log("Ordenar as cores: ");
list.forEach((ordem )=>console.log(ordem));