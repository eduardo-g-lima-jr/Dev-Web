// o comando 'typeof' retorna o tipo de uma variável.

var olaMundo = 'Olá Mundo!';
console.log(olaMundo);

let a = 10;
const b = 20;
var c = '10';
const d = '20';

console.log(a == b); // comparação de valores ser considerar o tipo
console.log(a == c); // comparação de valores ser considerar o tipo
console.log(a === c); // comparação de valores ser considerando o tipo
console.log(a !== d); // comparação de valores ser considerar o tipo com negação

// comparação com &&(AND) e usando o 'typeof', resultado true
console.log(a == c && typeof c == 'string');

// comparação com &&(AND) e usando o 'typeof', resultado false
console.log(a == c && typeof a == 'string');

// comparação com ||(OR) e usando o 'typeof', resultado true
console.log(a == c || typeof a == 'string');


// condicional 
if (c === '10'){
    console.log('Correto');
} 
else if (c === '11'){
    console.log('Talvez');
} 
else{
    console.log('Errado');
}

// Utilizando o 'switch case'
switch (b) {
    case 10:
        console.log('Valor da variável é 10.');
        break;

    case 20:
        console.log('Valor da variável é 20.');
        break;
     
    case 30:
        console.log('Valor da variável é 30.');
        break;
    
    default:
        console.log('Nenhuma das Opções.');
} // Usando o 'switch case' a variável deve ser do tipo e 
  // ter o mesmo valor de cada case

// Laço de repetição usando o template string
let n = 7;
console.log(`Tabuada do ${n}:`);
for (i=1; i<=10; i++) {
    console.log(`${i} X ${n} = ${i*n}`);
}