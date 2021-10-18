// procurando um elemento no array

const alunos = ['John', 'Jess', 'Isaac'];
const notas = [10, 7, 5];
let resultados = [alunos, notas];

const exibeAlunoENota = (nome) => {
    if (resultados[0].includes(nome)) {
        let indice = resultados[0].indexOf(nome);
        return resultados[0][indice] + resultados[1][indice];
    } else {
        return 'Aluno não está cadastrado';
    }
}

// includes -> retornar boolean
// indexOf -> retorna um número (a posição do elemento no array)

console.log(exibeAlunoENota('John')); // John10
console.log(exibeAlunoENota('Jess')); // Jess7
console.log(exibeAlunoENota('Isaac')); // Isaac5
console.log(exibeAlunoENota('Sam')); // Aluno não cadastrado