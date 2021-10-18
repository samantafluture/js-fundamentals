// == (2 iguais, comparação implícita)
// -> compara apenas o valor

const numero = 5;
const string = "5";

console.log(numero == string); // true

// === (3 iguais, comparação explícita)
// ->  compara o valor e o tipo de dado
// boa prática e fazer conversão explícita (Number() ou toString())

console.log(numero === string); // false
console.log(typeof numero);
console.log(typeof string);