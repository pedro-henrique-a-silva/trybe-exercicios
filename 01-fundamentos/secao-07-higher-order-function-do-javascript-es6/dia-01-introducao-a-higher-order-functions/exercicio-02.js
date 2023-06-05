const numbers = [19, 21, 31, 3, 46, 22, 15];

// Adicione seu código aqui

const result = numbers.find((number) => (number % 3 === 0 && number % 5 === 0));
// console.log(result);

const names = ['João', 'Irene', 'Fernando', 'Maria'];

// Adicione seu código aqui
const nome = names.find((name) => name.length === 5);
// console.log(nome);

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
];

// Adicione seu código aqui

const musica = musicas.find((music) => (music.id === '31031685'));
// console.log(musica.title);


const convidados = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, convidado) => {
  //Adicione seu código aqui
  return convidados.some((nome) => nome === convidado);
};

// console.log(hasName(convidados, 'Ana'));
// console.log(hasName(convidados, 'Pedro'));

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, idade) => {
  return people.every((pessoa) => pessoa.age >= idade)
}

  //Adicione seu código aqui

console.log(verifyAges(people, 18));
console.log(verifyAges(people, 14));