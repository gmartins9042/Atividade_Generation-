import readLine = require("readline-sync");
import { Queue } from "./queueMetodos";

// Cria a fila de clientes
const filaClientes = new Queue<string>();

let opcao: number;

do {
    console.log("\n***************************************");
    console.log("1 - Adicionar Cliente na Fila");
    console.log("2 - Listar todos os Clientes");
    console.log("3 - Retirar Cliente da Fila");
    console.log("0 - Sair");
    console.log("***************************************");

    opcao = readLine.questionInt("Digite uma opção: ");

    switch (opcao) {
        case 1:
            const nome = readLine.question("Digite o nome: ");
            filaClientes.enqueue(nome);
            console.log("\nFila:");
            filaClientes.list().forEach((cliente) => console.log(cliente));
            console.log("\nCliente Adicionado!");
            break;

        case 2:
            const clientes = filaClientes.list();
            if (clientes.length === 0) {
                console.log("\nA Fila está vazia!");
            } else {
                console.log("\nLista de Clientes na Fila:");
                clientes.forEach((cliente) => console.log(cliente));
            }
            break;

        case 3:
            if (filaClientes.isEmpty()) {
                console.log("\nA Fila está vazia!");
            } else {
                filaClientes.dequeue();
                console.log("\nFila:");
                filaClientes.list().forEach((cliente) => console.log(cliente));
                console.log("\nO Cliente foi Chamado!");
            }
            break;

        case 0:
            console.log("\nPrograma Finalizado!");
            break;

        default:
            console.log("\nOpção inválida. Tente novamente.");
    }

} while (opcao !== 0);
