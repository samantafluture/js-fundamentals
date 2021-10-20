// Object.create()
// -> criar objetos usando como protótipo objeto já criado

// objeto inicial
cliente1 = {
    nome: 'Sam',
    idade: 32,
    cidade: 'Montreal'
}

// usa como parâmetro um objeto já criado
// cliente2 -> uma instância diferente de cliente1, pode ser trabalhar de forma independente
const cliente2 = Object.create(cliente1);
cliente2.nome = 'Alissa';

console.log(cliente1.nome);
console.log(cliente2.nome);
