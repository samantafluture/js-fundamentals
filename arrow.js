// arrow function 
// -> flecha na sintaxe

const apresentar = nome => `meu nome é ${nome}`;
const soma = (x, y) => x + y;

// mais de uma linha -> usa chaves e usa 'return'
const somaNumerosPequenos = (x, y) => {
    if (x || y > 10) {
        return 'somente números menores';
    } else {
        return x + y;
    }
}

// rápido e curto
// vantagem com objetos
// lembrar do hoisting (se comporta = da expressão de função)