// filter
// -> método de filtragem que retorna uma lista
// -> recebe uma função, método callback
// -> funciona à base de true or false

const nomes = ['Ana', 'Joana', 'Cleber', 'Mauro'];
const notas = [7, 9, 6.5, 4.5];

// neste caso, estamos usando o array de notas para filtrar o array de nomes!
// a associação dos dois arrays é feita pelo 'indice'
// 2 params abaixo: 'aluno' -> elemento; 'indice' -> index
// index -> pode usar [] para localizar valor em cada loop
// resultado -> todos os elementos que forem true à condição colocada, serão incluídos no novo array
// usar o _ antes do param caso ele não vá ser usado, porém existe e deve ser passado
const nomeReprovado = nomes.filter((_aluno, indice) => notas[indice] < 5);
console.log(nomeReprovado);

// exemplo sem associação de arrays
const notaReprovada = notas.filter(nota => nota < 5);
console.log(notaReprovada);