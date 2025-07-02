const readline = require('readline-sync');

//Entrada
let nome = readline.question("Digite o Nome do Doador: ");
let idade = readline.questionInt("Digite a Idade do Doador: ");
let doacaoSangue = readline.questionInt("Primeira Doacao de Sangue?    1- SIM   |   2-NAO: ");



//Saida
if(idade >=18 && idade <=69){
  if(idade >=60 && doacaoSangue ===1){
    console.log(`${nome} Nao está apto para doar sangue. Primeira doaçao nao permitida nessa idade.`);
  }else{
    console.log(`${nome} Esta apto para doar sangue!`);
  } 
}else{
    console.log(`${nome} Nao esta apto para doar sangue.`);
}
