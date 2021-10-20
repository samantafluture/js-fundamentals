// new

// função construtora
function Cliente(nome, cpf, email, saldo) {
    this.nome = nome;
    this.cpf = cpf;
    this.saldo = saldo;
    this.depositar = function (valor) {
        this.saldo += valor;
    };
}

// nova instância de um Cliente
const samanta = new Cliente('Samanta', '1213829', 'samanta@gmail.com', 100);

console.log(samanta);
