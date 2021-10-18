// for() clássico
// -> laço de repetição, estrutura de loop
// -> se repete enquanto a condição é verdadeira

const lista = [100, 200, 300, 400, 500, 600];

// 3 params: 
// -> i = valor de controle, inicializado com 0
// -> condição de parada
// -> incremento do valor de controle (i = i + 1)
for (let i = 0; i < lista.length; i++) {
    console.log(i, lista[i]); // mostra o i e o elemento referente ao i/índice atual
}

// operações em elementos de um array

const notas = [10, 6.5, 8, 7.5];
let notasSomadas = 0; // precisa ser criada fora do for

for (let i = 0; i < notas.length; i++) {
    notasSomadas += notas[i]; // soma nele mesmo cada um dos valores dos elementos acessados via índice i 
}

let media = notasSomadas/notas.length;

console.log(notas);
console.log(notasSomadas);
console.log(media);

