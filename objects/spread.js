// spread operator (...)
// -> copia as propriedades de um objeto para outro
// -> "espalhando" os conteúdos
const clientes = [
    {
        nome: 'Samanta',
        idade: 32,
        dependentes: [
            { nome: 'Alissa', idade: 30, parentesco: 'Esposa' },
            { nome: 'Renan', idade: 25, parentesco: 'Irmão' }
        ]
    },
    {
        nome: 'John',
        idade: 35,
        dependentes: [
            { nome: 'Mary', idade: 12, parentesco: 'Filha' },
            { nome: 'Jane', idade: 14, parentesco: 'Filha' }
        ]
    },
    {
        nome: 'Roger',
        idade: 41,
        dependentes: [
            { nome: 'Kate', idade: 48, parentesco: 'Esposa' },
            { nome: 'Larry', idade: 9, parentesco: 'Filho' }
        ]
    }
];

// todos os dependentes agora são parte de um único array
// -> criou um array, espalhou os valores que ele pegou
// -> estão "espalhados" dentro do array de dependentes
const listaDependentes = [
    ...clientes[0].dependentes,
    ...clientes[1].dependentes,
    ...clientes[2].dependentes
];

console.log(listaDependentes);
console.table(listaDependentes);