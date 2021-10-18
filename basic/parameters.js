// parametros (ou argumentos)
// -> recebe informações para serem executados

function soma(x, y) {
    return x + y;
}

console.log(soma(1, 2));

// ordem dos parâmetros importa!

// x -> vai ser 1
// y -> vai ser 2

function multiplica(x= 1, y = 1) {
    return x * y;
}

console.log(multiplica(soma(1,2)));