// ternario
// -> faz uma comparação, é um if

const idadeMinima = 18;
const cliente = 19;

if (cliente >= idadeMinima) {
    console.log("cerveja");
} else {
    console.log("água");
}

console.log(cliente >= idadeMinima ? "cerveja" : "água");

// primeiro bloco = condição
// depois = saídas -> verdadeira/true : falsa/false
// operador ? -> separa a condição das saídas
// operados : -> separa true do false
// chama ternário pois temos 3 operadores em uma linha!