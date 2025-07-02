const readline = require("readline-sync");


console.log("Codigo Do Produto   |     Produto     |    Preco Produto|");
console.log("1                   | Cachorro Quente |    R$ 10.00     |");
console.log("2                   |    X-Salada     |    R$ 15.00     |");
console.log("3                   |    X-Bacon      |    R$ 18.00     |");
console.log("4                   |     Bauru       |    R$ 12.00     |");
console.log("5                   |  Refrigerante   |    R$ 8.00      |");
console.log("6                   | Suco De Laranja |    R$ 13.00     |");

let item = readline.questionFloat("Digite o Codigo do Produto: ");
let quantidade = readline.questionInt("Quantas unidades? ");
let prduto;
let preco;

switch (item) {
    case 1:
        prduto = "Cachorro Quente";
        preco = 10.00;
        break;

    case 2:
        prduto = "X-Salada";
        preco = 15.00;
        break;

    case 3:
        prduto = "X-Bacon";
        preco = 18.00;
        break;

    case 4:
        prduto = "Bauru";
        preco = 12.00;
        break;

    case 5:
        prduto = "Refrigerante";
        preco = 8.00;
        break;

    case 6:
        prduto = "Suco de Laranja";
        preco = 13.00;
        break;

    default:
        console.log("Codigo invalido!");
}
//calculo 
let total = preco * quantidade

//Saida
console.log(`Produto ficara R$${total.toFixed(2)}`);