// splice
// -> altera array original (remove e adiciona elementos onde desejar)
// -> 2-3 params (start, quantidade a ser removida, novo elemento no lugar)
// -> pode ser usado sem o param 3 (novo elemento)
// -> pode colocar novo elemento em qualquer posição, indicar no param 1

const nomes = ['Ana', 'Alissa', 'Arthur', 'Allan'];

nomes.splice(1, 2, 'André'); // começo a remover no índice 1 e remove 2 nomes; adiciono 'André'
console.log(nomes);

nomes.splice(1, 0, 'Alice'); // adiciona 'Alice' na posição 1, sem remover nada
console.log(nomes);