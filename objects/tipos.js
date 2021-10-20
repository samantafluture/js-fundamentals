// tipos de dados

// -> arrays e objetos trabalhando juntos
// tipo array como valor
const cliente = {
    nome: 'Samanta',
    idade: 32,
    cidade: 'São Caetano do Sul',
    email: 'samantafluture@gmail.com',
    telefones: ['983464469', '42242181']
}

// acessar todos os valores da chave 'telefones'
// como é um array, conseguimos usar os métodos disponíveis para arrays
cliente.telefones.forEach(telefone => console.log(telefone));

// -> objeto dentro de objetos
cliente.dependentes = {
    nome: 'Alissa',
    idade: 30,
    parentesco: 'parceira'
}

console.log(cliente);

// alterar valor de alguma propriedade do elemento 'dependente'
cliente.dependentes.parentesco = 'Esposa';
console.log(cliente);