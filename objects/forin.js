// for..in
// percorrer e listar informações de um objeto

const cliente = {
    nome: 'Samanta',
    idade: 32,
    cidade: 'São Caetano do Sul',
    email: 'samantafluture@gmail.com',
    telefones: ['983464469', '42242181'],
    dependentes: [
        { nome: 'Alissa', idade: 30, parentesco: 'Esposa' },
        { nome: 'Renan', idade: 25, parentesco: 'Irmão' }
    ],
    saldo: 100,
    depositar: function (valor) {
        this.saldo += valor;
    },
    sacar: function (valor) {
        this.saldo -= valor;
    }
};

// guardar dentro da variável relatório apenas se não for tipo objeto ou tipo function
// info -> index para percorrer o objeto
let relatorio = '';
for (let info in cliente) {
    if (
        typeof cliente[info] === 'object' ||
        typeof cliente[info] === 'function'
    ) {
        continue;
    } else {
        relatorio += `
        ${info}: ${cliente[info]}
        `;
    }
}

console.log(relatorio);
