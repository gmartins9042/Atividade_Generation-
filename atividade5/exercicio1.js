"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readLine = require("readline-sync");
const queueMetodos_1 = require("./queueMetodos"); // Importando a classe de outro arquivo
// Cria a fila de clientes
const filaClientes = new queueMetodos_1.Queue();
let opcao;
do {
    console.log("\n***************************************");
    console.log("1 - Adicionar Cliente na Fila");
    console.log("2 - Listar todos os Clientes");
    console.log("3 - Retirar Cliente da Fila");
    console.log("0 - Sair");
    console.log("***************************************");
    opcao = readLine.questionInt("Entre com a opcao desejada: ");
    switch (opcao) {
        case 1:
            const nome = readLine.question("Digite o nome do Cliente: ");
            filaClientes.enqueue(nome);
            console.log(`\n>> Cliente "${nome}" foi adicionado à fila.`);
            break;
        case 2:
            const clientes = filaClientes.list();
            if (clientes.length === 0) {
                console.log("\n>> A fila está vazia.");
            }
            else {
                console.log("\n>> Clientes na fila:");
                clientes.forEach((cliente, index) => {
                    console.log(`${index + 1} - ${cliente}`);
                });
            }
            break;
        case 3:
            if (filaClientes.isEmpty()) {
                console.log("\n>> A fila está vazia. Ninguém para chamar.");
            }
            else {
                const chamado = filaClientes.dequeue();
                console.log(`\n>> Cliente chamado: ${chamado}`);
            }
            break;
        case 0:
            console.log("\n>> Programa finalizado.");
            break;
        default:
            console.log("\n>> Opção inválida. Tente novamente.");
    }
} while (opcao !== 0);
