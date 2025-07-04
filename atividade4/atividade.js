"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Importar o readline
var readLine = require("readline-sync");
//Lista
var list = new Array();
//Repetição 
for (var i = 1; i <= 5; ++i) {
    list.push(readLine.question("Digite a Cor: "));
}
//Saide
console.log("Lista todas as cores: ");
//Cores em ordem que foi digitada
list.forEach(function (ordem) { return console.log(ordem); });
console.log("");
//Cores ordenadas
list.sort();
console.log("Ordenar as cores: ");
list.forEach(function (ordem) { return console.log(ordem); });
