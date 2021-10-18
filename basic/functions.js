// function
// -> trechos de código
// -> declaração e parâmetro dentro dos ()
// -> 3 formas de escrever functions em js

// forma #1 = declaração de função

// 1 -> declarar a função
function imprimeTexto(texto) {
    console.log(texto);
}

// 2 -> executar a função
imprimeTexto('hello');
imprimeTexto('world');

// return

function soma(){
    const resultado = 2 + 2;
}

console.log(soma()); // se não tem 'return' na função -> undefined

function subtrai(){
    return 2 - 1; // 'return', mandar o resultado pra fora da função
}

console.log(subtrai());

// função dentro de uma função

imprimeTexto((subtrai()));