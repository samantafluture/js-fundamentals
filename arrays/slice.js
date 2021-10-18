// slice
// -> divide o array
// -> 2 params (start,end)

const nomes = ['João', 'Juca', 'Juliano', 'Jéssica'];
const dupla1 = nomes.slice(0, nomes.length/2); // do primeiro ao meio
const dupla2 = nomes.slice(nomes.length/2); // do meio ao fim

console.log(dupla1);
console.log(dupla2);
