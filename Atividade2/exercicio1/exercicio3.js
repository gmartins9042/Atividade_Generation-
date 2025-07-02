const readline = require('readline-sync');


//Entrada
let nome = readline.question("Nome do Colaborador: ");

console.log("\nDiga seu Cargo:");
console.log("1 - Gerente\n2 - Vendedor\n3 - Supervisor\n4 - Motorista\n5 - Estoquista\n6 - Técnico de TI");

let cargo = readline.questionInt("Digite o Numero Correspondente ao Cargo: ");
let salario = readline.questionFloat("Digite o Salario: R$");

//Processamento//Saida
switch (cargo) {
    case 1:
        let novoSalario1 = salario + salario * 0.10;
        console.log(`Nome:${nome} \nCargo: Gerente \nNovo Salario: ${novoSalario1.toFixed(2)} `)
        break;
    case 2:
        let novoSalario2 = salario + salario * 0.07;
        console.log(`Nome:${nome} \nCargo: Vendedor \nNovo Salario: ${novoSalario2.toFixed(2)} `)
        break;
    case 3:
        let novoSalario3 = salario + salario * 0.09;
        console.log(`Nome:${nome} \nCargo: Supervisor \nNovo Salario: ${novoSalario3.toFixed(2)} `)
        break;
    case 4:
        let novoSalario4 = salario + salario * 0.06;
        console.log(`Nome:${nome} \nCargo: Motorista \nNovo Salario: ${novoSalario4.toFixed(2)} `)
        break;
    case 5:
        let novoSalario5 = salario + salario * 0.05;
        console.log(`Nome:${nome} \nCargo: Estoquista \nNovo Salario:${novoSalario5.toFixed(2)} `)
        break;
    case 6:
        let novoSalario6 = salario + salario * 0.08;
        console.log(`Nome:${nome} \nCargo: Tecnico de TI \nNovo Salario: ${novoSalario6.toFixed(2)} `)
        break;
    default:
        console.log("Cargo invalido.")
}