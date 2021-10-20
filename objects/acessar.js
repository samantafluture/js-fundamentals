// acessar dados do objeto

const cliente = {
    nome: 'Samanta',
    idade: 32,
    cidade: 'São Caetano do Sul',
    email: 'samantafluture@gmail.com'
}

// 1 -> usar notação de ponto para acessar as chaves do objeto
console.log("=== Notação de ponto ===");
console.log(cliente.nome, cliente.idade, cliente.cidade, cliente.email);

// 2 -> usar notação de colchete []
// quando não saber o nome da chave que precisamos acessar
// passa a chave como variável, para consultar seu valor

const chaves = ['nome', 'idade', 'cidade', 'email'];

// usando índice da posição
console.log(cliente[chaves[0]]); // nome

// usando o valor em si
console.log(cliente['nome']); // nome

// iterando por todos os valores
chaves.forEach(chave=> console.log(cliente[chave])); // todos

