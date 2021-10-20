// alterar e adicionar campos no objeto

const cliente = {
    nome: 'Samanta',
    idade: 32,
    cidade: 'São Caetano do Sul',
    email: 'samantafluture@gmail.com'
}
console.log(cliente); // sem celular

// adicionar um elemento com chave 'celular'
cliente.celular = '99998748'; 
console.log(cliente); // com celular

// alterar valor
cliente.celular = '888883727';
console.log(cliente); // valor da chave 'celular' foi substituído

// deletar campo 'celular'
delete cliente.celular;
console.log(cliente); // campo 'celular' deletado (remove tanto a chave quanto seu valor)

