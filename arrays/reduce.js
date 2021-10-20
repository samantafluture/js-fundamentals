// reduce
// -> reduzir todo o array para um único valor numérico

const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7]; // média 7.5
const salaJava = [6, 5, 8, 9, 5, 6]; // média 6.5
const salaPython = [7, 3.5, 8, 9.5]; // média 7

// valor atual -> valor atual do loop
// acumulador -> de cada loop
// 0 -> número neutro, valor que vai ser acumulado (pode começar com qualquer valor)
function mediaSala(sala) {
    const soma = sala.reduce((acumulador, atual) => 
    atual + acumulador, 0);
    return soma/sala.length;
}

console.log(mediaSala(salaJS), mediaSala(salaJava), mediaSala(salaPython));


// exemplo 2 -> média de um array
// a = acumulador
// b = atual
const notas = [10, 6.5, 8, 7];

const media = notas.reduce((a, b) => a + b, 0) / notas.length;
console.log(media);