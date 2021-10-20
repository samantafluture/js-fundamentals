// class

class Cliente {
    constructor(nome, email, saldo) {
        this.nome = nome;
        this.email = email;
        this.saldo = saldo;
    }

    depositar(valor) {
        this.saldo += valor;
    }

    exibirSaldo() {
        console.log(this.saldo);
    }
}

// nova instância
const samanta = new Cliente('Sam', 'sam@email.com', 1000);

console.log(samanta);
samanta.exibirSaldo(); // invocando um método da classe

class ClientePoupanca extends Cliente {
    constructor(nome, email, saldo, saldoPoupanca) {
        super(nome, email, saldo);
        this.saldoPoupanca = saldoPoupanca;
    }

    depositarPoupanca(valor) {
        this.saldoPoupanca += valor;
    }
}

const alissa = new ClientePoupanca(
    "Alissa",
    "alissa@email.com",
    1200,
    200
);

console.log(alissa);

alissa.depositar(100);
alissa.depositarPoupanca(50);

console.log(alissa);