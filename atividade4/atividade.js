"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Importar o readline
const readLine = require("readline-sync");
//Lista
const list = new Array();
//Repetição 
for (let i = 1; i <= 5; ++i) {
    list.push(readLine.question("Digite a Cor: "));
}
//Saide
console.log("Lista todas as cores: ");
//Cores em ordem que foi digitada
list.forEach((ordem) => console.log(ordem));
console.log("");
//Cores ordenadas
list.sort();
console.log("Ordenar as cores: ");
list.forEach((ordem) => console.log(ordem));
