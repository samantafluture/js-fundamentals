// forEach()
// -> método
// -> passa por cada elemento do array
// -> recebe uma função como parâmetro

// diferença do for()
// -> método para laço de repetição (mesmo papel do for)
// -> tipo de método -> callback
// -> função que chama outra, recebe uma função como param
// -> ele já faz o loop sem precisar passar o [i]
// -> ele interpreta que o param passado já é este [i]

const notas = [10, 6.5, 8, 7.5];
let notasSomadas = 0;

notas.forEach(nota => {
    notasSomadas += nota;
})

let media = notasSomadas/notas.length;

console.log(notas);
console.log(notasSomadas);
console.log(media);
