// funções callback

const nomes = ['Kai', 'Kevin', 'Kate'];

nomes.forEach(imprimeNomes);
function imprimeNomes(nome) {
    console.log(nome);
}

nomes.forEach(nome => {
    console.log(nome);
})