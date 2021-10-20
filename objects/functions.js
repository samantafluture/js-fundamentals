// functions

const cliente = {
    nome: 'Samanta',
    idade: 32,
    cidade: 'São Caetano do Sul',
    email: 'samantafluture@gmail.com',
    telefones: [ '983464469', '42242181' ],
    dependentes: [
        { nome: 'Alissa', idade: 30, parentesco: 'Esposa' },
        { nome: 'Renan', idade: 25, parentesco: 'Irmão' }
    ],
    saldo: 100,
    depositar: function(valor){
        this.saldo += valor;
    },
    sacar: function(valor){
        this.saldo -= valor;
    }
}

console.log("saldo inicial:", cliente.saldo);
cliente.depositar(60);
cliente.sacar(150);
console.log("saldo final:", cliente.saldo);



