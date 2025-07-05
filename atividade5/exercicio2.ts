
import readlineSync from "readline-sync";
import  {Stack}  from "./stackMedotos"; 

const pilhaDeLivros = new Stack<string>();
let opcao: number;

do {
    console.log("*************************************");
    console.log("1 - Adicionar Livro na pilha");
    console.log("2 - Listar todos os Livros");
    console.log("3 - Retirar Livro da pilha");
    console.log("0 - Sair");
    console.log("*************************************");
    opcao = parseInt(readlineSync.question("Entre com a opcao desejada: "));

    switch (opcao) {
        case 1:
            const livro = readlineSync.question("Digite o nome do livro: ");
            pilhaDeLivros.push(livro);
            console.log("\nPilha:");
            pilhaDeLivros.printStack();
            console.log("\nLivro adicionado!\n");
            break;

        case 2:
            if (pilhaDeLivros.isEmpty()) {
                console.log("\nA pilha está vazia!\n");
            } else {
                console.log("\nLista de Livros na Pilha:");
                pilhaDeLivros.printStack();
                console.log();
            }
            break;

        case 3:
            if (pilhaDeLivros.isEmpty()) {
                console.log("\nA pilha está vazia!\n");
            } else {
                pilhaDeLivros.pop();
                console.log("\nPilha:");
                pilhaDeLivros.printStack();
                console.log("\nUm Livro foi retirado da pilha!\n");
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
