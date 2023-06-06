const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sumNumbersOddFilterReduce = (numbers) => {
  const numbersOdd = numbers.filter((number) => number % 2 === 0);
  return numbersOdd.reduce((acc, curr) => {return acc + curr}, 0);
}
// console.log(somaNumerosParesFilterReduce(numbers));

const sumNumbersOddReduceOnly = (numbers) => {
  const sumOdd = (acc, curr) => curr % 2 === 0 ? acc + curr: acc;
  return numbers.reduce(sumOdd, 0)
}
// console.log(somaNumerosParesReduceOnly(numbers));

const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 67 },
      { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 65 },
    ],
  },
  {
    nome: 'Mario',
    sobrenome: 'Ferreira',
    idade: 15,
    turno: 'Tarde',
    materias: [
      { name: 'Matemática', nota: 59 },
      { name: 'Português', nota: 80 },
      { name: 'Química', nota: 78 },
      { name: 'Biologia', nota: 92 },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 76 },
      { name: 'Português', nota: 90 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 80 },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 91 },
      { name: 'Português', nota: 85 },
      { name: 'Química', nota: 92 },
      { name: 'Biologia', nota: 90 },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 70 },
      { name: 'Português', nota: 70 },
      { name: 'Química', nota: 60 },
      { name: 'Biologia', nota: 50 },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 80 },
      { name: 'Português', nota: 82 },
      { name: 'Química', nota: 79 },
      { name: 'Biologia', nota: 75 },
    ],
  },
];

const betterClassStudents = (students) => {
  return students.map((student) => {
    const betterClassNote = student.materias.reduce(
      (betterNote, note) => betterNote.nota > note.nota ? betterNote:note);

    // const betterClass = student.materias.find((classe) => classe.nota === betterClassNote);
    return {Nome: student.nome, Materia: betterClassNote.name}
  });
};

console.log(betterClassStudents(estudantes));