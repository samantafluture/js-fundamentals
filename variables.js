// var 
// -> funciona em qualquer parte do código
// -> pode usar antes de declarar
// -> complicações

var altura = 5;
var comprimento = 7;

area = altura * comprimento;
console.log(area);
var area;

// let

let forma = 'retangulo';
let height = 5;
let width = 7;
let result;

if (forma === 'retangulo') {
    result = height * width;
} else {
    result = (height * width) / 2;
}

console.log(result);

// const 
// -> sempre que cria, precisa inicializar com um valor

const formaConstante = 'quadrada';
const h = 5;
const w = 7;
let final; // -> precisa ser let pois ela vai mudar e tb porque não temos valor de início

if (formaConstante === 'quadrada') {
    final = h * w;
} else {
    final = h * w / 2;
}

console.log(final);

// truthy or falsy
// -> não booleans mas podem se comportar assim

// 0 ou "" -> falsy -> do "tipo" falso
// 1 -> truthy -> do "tipo" verdadeiro

console.log(0 == false);
console.log("" == false);
console.log(1 == true);

// null = object; = null
// undefined -> nada foi atribuído, não foi inicializada