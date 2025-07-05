import readlineSync from "readline-sync";
import { Queue } from "./queueMetodos"; // ajuste o caminho se necessário

const filaDeClientes = new Queue<string>();
let opcao: number;

do {
    console.log("*************************************");
    console.log("1 - Adicionar Cliente na Fila");
    console.log("2 - Listar todos os Clientes");
    console.log("3 - Retirar Cliente da Fila");
    console.log("0 - Sair");
    console.log("*************************************");
    opcao = parseInt(readlineSync.question("Entre com a opcao desejada: "));

    switch (opcao) {
        case 1:
            const cliente = readlineSync.question("Digite o nome do cliente: ");
            filaDeClientes.enqueue(cliente);
            console.log("\nFila:");
            filaDeClientes.printQueue();
            console.log("\nCliente Adicionado!\n");
            break;

        case 2:
            if (filaDeClientes.isEmpty()) {
                console.log("\nA fila está vazia!\n");
            } else {
                console.log("\nLista de Clientes na Fila:");
                filaDeClientes.printQueue();
                console.log();
            }
            break;

        case 3:
            if (filaDeClientes.isEmpty()) {
                console.log("\nA fila está vazia!\n");
            } else {
                filaDeClientes.dequeue();
                console.log("\nFila:");
                filaDeClientes.printQueue();
                console.log("\nO Cliente foi Chamado!\n");
            }
            break;

        case 0:
            console.log("\nPrograma Finalizado!");
            break;

        default:
            console.log("\nOpcao invalida, tente novamente!\n");
            break;
    }
} while (opcao !== 0);
