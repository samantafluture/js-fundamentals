// lista de objetos

const cliente = {
    nome: 'Samanta',
    idade: 32,
    cidade: 'São Caetano do Sul',
    email: 'samantafluture@gmail.com',
    telefones: [ '983464469', '42242181' ],
    dependentes: [{ 
        nome: 'Alissa', idade: 30, parentesco: 'Esposa' 
    }]
}

// -> adicionar dado em um array
cliente.dependentes.push({
    nome: 'Renan', 
    idade: 25,
    parentesco: 'Irmão'
});

console.log(cliente);

// -> acessar apenas um elemento da lista
// filtrar a lista [] para quem tem 25 anos
const maisNovo = cliente.dependentes.filter((dependente) => dependente.idade === 25 );

// pegar o objeto retornado pelo filter e acessar o nome com a notação de ponto
console.log(maisNovo[0].nome); 
