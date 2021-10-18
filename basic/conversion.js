// conversão implícita
// -> um tipo de dado em outro

const numero = 456;
const string = "456";

console.log('=== compara valor e tipo', numero === string);
console.log('== compara valor', numero == string);
console.log('concatenação de strings', numero + string);

// conversão explícita
// -> Number() -> transformar string em número
// -> String() -> transformar número em string
console.log('somar números', numero + Number(string));
