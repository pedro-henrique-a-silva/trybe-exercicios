

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
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let novoArray = [];

// for (let index = 0; index < numbers.length; index += 1){
//   let num = (numbers[index] * numbers[index+1])
//   if (index !== numbers.length-1){
//     novoArray.push(num)
//   }else{
//     novoArray.push(numbers[index] *  2)
//   }
// }

// console.log(novoArray);

// exercicio 4 

// n = 5

// *****
// *****
// *****
// *****
// *****

// construindo um quadrado
// let n = 10;
// let symbol = '*';
// let inputLine = '';

// for (let index = 0; index < n; index += 1){
//   inputLine += symbol
// }

// for (let index = 0; index < n; index += 1){
//   console.log(inputLine);
// }


// n = 5

// *
// **
// ***
// ****
// *****

// let n = 5;
// let symbol = '*';
// let inputLine = '';

// for (let index = 0; index < n; index += 1){
//   console.log(inputLine);
//   inputLine += symbol
// }


// n = 5

//     *
//    **
//   ***
//  ****
// *****

// let n = 5;
// let symbol = '*';
// let inputLine = '';
// let inputPosition = n - 1;

// for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {

//   for (let columnIndex = 0; columnIndex < n; columnIndex += 1) {

//     if (columnIndex < inputPosition) {
//       inputLine = inputLine + ' ';
//     } else {
//       inputLine = inputLine + symbol;
//     }
//   }
//   console.log(inputLine);
//   inputLine = '';
//   inputPosition -= 1;
// };


// n = 5

//   *
//  ***
// *****

// let n = 10;
// let symbol = '*';
// let inputLine = '';

// let midOfMatrix = (n + 1) / 2;
// let controlLeft = midOfMatrix;
// let controlRight = midOfMatrix;

// for (let lineIndex = 0; lineIndex <= midOfMatrix; lineIndex += 1) {
//   for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
//     if (columnIndex > controlLeft && columnIndex < controlRight) {
//       inputLine = inputLine + symbol;
//     } else {
//       inputLine = inputLine + ' ';
//     }
//   }
//   console.log(inputLine);
//   inputLine = '';
//   controlRight += 1;
//   controlLeft -= 1
// };


// Por último, faça com que a variável seja incrementada com o valor correspondente a cada *loop*.
// n = 7

//    *
//   * *
//  *   *
// *******

let n = 7;
let middle = (n + 1) / 2;
let controlLeft = middle;
let controlRight = middle;
let symbol = '*';

for (let line = 1; line <= middle; line += 1) {
  let outputLine = '';
  for (let col = 1; col <= n; col += 1) {

    if (col == controlLeft || col == controlRight || line == middle) {
      outputLine += symbol;
    } else {
      outputLine += ' ';
    }
  }
  controlLeft -= 1;
  controlRight += 1;
  console.log(outputLine);
}

// ultimo exercicio

let divisors = 1;
let numberToCheck = 31;

for (let number = 2; number <= numberToCheck; number += 1) {
  if (numberToCheck % number === 0) divisors += 1;
}

if (divisors === 2) console.log(numberToCheck + ' é primo');
else console.log(numberToCheck + ' não é primo');