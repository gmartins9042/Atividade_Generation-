const readline = require('readline-sync');

//Entrada
let letraA = readline.questionInt('Digite o numero A: ');
let letraB = readline.questionInt('Digite o numero B: ');
let letraC = readline.questionInt('Digite o numero C: ');
let resultado = letraA + letraB;

console.log(`${letraA} + ${letraB} = ${resultado}`);

if(resultado > letraC){
    console.log(`A Soma de ${letraA} + ${letraB}. É maior do que ${letraC}`);
}else if(resultado === letraC){
    console.log(`A Soma de ${letraA} + ${letraB}. É igual a ${letraC}`);
}else{
    console.log(`A Soma de ${letraA} + ${letraB}. É menor do que ${letraC}`)
}
