// programação orientação a objetos
// -> modela conceitos do mundo real

// classe -> características
class Pessoa {
    constructor(nome, idade, email) {
        this.nome = nome;
        this.idade = idade;
        this.email = email;
    }

    // métodos -> ações, comportamentos
    exibirNome() {
        console.log(this.nome);
    }
}

// new -> criando uma instância de uma classe 
const samanta = new Pessoa("Samanta", 32, "sam@email.com");

console.log(samanta);
console.log(samanta.nome); // Samanta
samanta.exibirNome(); // 1000

// herança
class Programador extends Pessoa {
    constructor(nome, idade, email, linguagem){
        super(nome, idade, email);
        this.linguagem = linguagem;
    }
}

