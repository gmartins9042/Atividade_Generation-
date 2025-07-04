"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Importar o readline
var readLine = require("readline-sync");
//Lista
var list = new Set();
//Pedindo ao usuario que digite numero de 1 a 10.
console.log("Digite de 1 a 10 Aleatoriamente.");
for (var i = 1; i <= 10; i++) {
    var numero = readLine.questionInt("Digite o numero: ");
    list.add(numero);
}
console.table("Listar dados do Set");
list.forEach(function (n) { return console.log(n); });
