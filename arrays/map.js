// map()
// -> método callback

// diferença do forEach()
// -> forEach não retorna nada! só executa
// -> map retorna uma nova array atualizada

const notas = [10, 9, 8, 7, 6];

const notasAtualizadas = notas.map((nota) => (nota == 10 ? nota : ++nota));
// ++nota -> incremente primeiro, depois passa para dentro do array

console.log(notasAtualizadas);

const senhas = [ "1234", "5432", "9876"];

const senhasComHash = senhas.map((senha => senha + "ZXV"));

console.log(senhasComHash);

const nomes = ["Sam", "Flu", "Sá"];

const nomesAtualizados = nomes.map(nome => nome.includes('F') ? nome : nome + 'Flu');

console.log(nomesAtualizados);

// ------
// alterando strings com map()

let frutas = ['BANANA', 'melancia', 'Abacaxi'];

const frutasLetrasMaiusculas = frutas.map(fruta => fruta.toUpperCase());

console.log(frutasLetrasMaiusculas);