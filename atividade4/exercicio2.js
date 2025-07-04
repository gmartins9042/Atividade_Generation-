"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Importar o readline
const readLine = require("readline-sync");
//Lista
const list = new Set();
//Pedindo ao usuario que digite numero de 1 a 10.
console.log("Digite de 1 a 10 Aleatoriamente.");
for (let i = 1; i <= 10; i++) {
    const numero = readLine.questionInt("Digite o numero: ");
    list.add(numero);
}
console.table("Listar dados do Set");
list.forEach((n) => console.log(n));
