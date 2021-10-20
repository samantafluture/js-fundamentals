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

console.log(samanta.hasOwnProperty("saldo")); // true
console.log(samanta instanceof Cliente); // true
console.log(typeof samanta); // object
console.log(Function.prototype.isPrototypeOf(Cliente)); // true
console.log(Cliente.constructor === Function); // TRUE