// exercicio 01
const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

// rectangles.forEach((rectangle) => {
//   console.log(rectangleArea(...rectangle)); 
// });

// exercicio 02

const sum = (...numbers) => numbers
  .reduce((total, number) => total += number, 0)

// console.log(sum(2, 3, 4, 10, 20, 20));

// Exercicio 03 

// name: nome da pessoa, age: idade, likes: gosta de, nationality: nacionalidade

const alex = {
  name: 'Alex',
  age: 26,
  likes: ['fly fishing'],
  nationality: 'Australian',
};

const gunnar = {
  name: 'Gunnar',
  age: 30,
  likes: ['hiking', 'scuba diving', 'taking pictures'],
  nationality: 'Icelandic',
};

// complete a assinatura da função abaixo
const personLikes = ({ name, age, likes }) => {
  const { name , age, likes} = object;
  return `${name} is ${age} years old and likes ${likes.join(', ')}.`
};
// <nome> tem <anos de idade> e gosta de <gostos da pessoa>

// Retornos esperados:
// console.log(personLikes(alex)); 
// console.log(personLikes(gunnar)); 

// Exercicio 04

// ano 1901 até o ano 2000;

const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
  // bornIn: nascido em
];

// escreva filterPeople abaixo

const filterPeople = (people) => people.filter((person) => {
  const {bornIn, nationality} = person;
  if (bornIn >= 1901 && bornIn <= 2000 && nationality === 'Australian') {
    return true;
  }
});

// console.log(filterPeople(people));

// exercicio 05 

const ships = [
  {
    name: 'Titanic',
    length: 269.1,
    measurementUnit: 'meters',
  },
  {
    name: 'Queen Mary 2',
    length: 1132,
    measurementUnit: 'feet',
  },
  {
    name: 'Yamato',
    length: 256,
    measurementUnit: 'meters',
  },
  // measurementUnit: unidade de medida
];

// escreva shipLength abaixo

const shipLength = (ship) => {
  const {name, length, measurementUnit: unit} = ship;
  return `${name} is ${length} ${unit} long`
}

// retorno esperado
// console.log(shipLength(ships[0]));
// console.log(shipLength(ships[1])); 
// console.log(shipLength(ships[2]));

// Exercicio 06


const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};
// yearSeasons: estações do ano.

const { spring, summer, autumn, winter} = yearSeasons;

const yearMonth = [...winter, ...spring, ...summer, ...autumn];

console.log(yearMonth);

