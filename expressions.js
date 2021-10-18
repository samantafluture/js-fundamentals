// forma declarativa

function minhaFuncao(param) {
    // bloco de código
}

minhaFuncao('param');

// expressão de função
// -> não tem nome da função, anônimas
// -> cria variável e atribui a função a ela

const soma = function(num1, num2) {
    return num1 + num2;
}

console.log(soma(1, 1));

// diferença principal

console.log(apresentar());
function apresentar() {
    return 'hello';
}

console.log(tchau()); // erro de referência -> só pode acessar depois que for inicializada
const tchau = function() { return 'tchau '};
// hoisting -> comportamento do js com var, que consegue ler antes mesmo de declarar