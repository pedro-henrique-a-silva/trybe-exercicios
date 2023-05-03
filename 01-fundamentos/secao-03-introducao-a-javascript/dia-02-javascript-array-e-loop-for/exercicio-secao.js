

// exercicio 1 bubble sort em order crescente
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let indexFrente = 1; indexFrente < numbers.length; indexFrente += 1) {
//   for (let indexTras = 0; indexTras < indexFrente; indexTras += 1) {
//     if (numbers[indexFrente] < numbers[indexTras]) {
//       let position = numbers[indexFrente];
//       numbers[indexFrente] = numbers[indexTras];
//       numbers[indexTras] = position;
//     }
//   }
// }

// console.log(numbers);

// exercicio 2 bubble sort em ordem decrescente

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let indexFrente = 1; indexFrente < numbers.length; indexFrente += 1) {
//   for (let indexTras = 0; indexTras < indexFrente; indexTras += 1) {
//     if (numbers[indexFrente] > numbers[indexTras]) {
//       let position = numbers[indexFrente];
//       numbers[indexFrente] = numbers[indexTras];
//       numbers[indexTras] = position;
//     }
//   }
// }

// console.log(numbers);


// exercicio 3 novo array com valores multiplicados pelo valor seguinte
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let novoArray = [];

for (let index = 0; index < numbers.length; index += 1){
  let num = (numbers[index] * numbers[index+1])
  if (index !== numbers.length-1){
    novoArray.push(num)
  }else{
    novoArray.push(numbers[index])
  }
}

console.log(novoArray);