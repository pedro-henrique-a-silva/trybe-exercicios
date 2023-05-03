let numbers = [20, 10, 4, 20, 700, 8, 100, 23, 3, 28];


// Percorra o array imprimindo todos os valores contidos nele com a função console.log().
// for (let number of numbers) {
//   console.log(number);
// }

// Some todos os valores contidos no array e imprima o resultado.
// let soma = 0;
// for (let number of numbers) {
//   soma += number;
// }
// console.log(soma);

// Calcule e imprima a média aritmética dos valores contidos no array.

// let soma = 0;
// for (let number of numbers) {
//   soma += number;
// }

// let media = soma / numbers.length;
// console.log(media);

// if (media > 20){
//   console.log('O valor da média aritmética é maior que 20');
// }else {
//   console.log('O valor da média aritmética é menor ou igual a 20');

// }
// A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.

// Utilizando for, descubra o maior valor contido no array e imprima-o.
// let cont = 1;

// for (let number1 of numbers){

//   for (let number2 of numbers){
//     if (number1 > number2){
//       cont += 1;
//     }
//   }

//   if (cont === (numbers.length - 1)){
//     console.log(number1,'E o maior número da lista');
//     break;
//   }else{
//     cont = 0
//   }
// }

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, 
// imprima a mensagem: “Nenhum valor ímpar encontrado”.
// let impares = [];
// let pares = [];

// for (let number of numbers){
//   if (number % 2 === 0){
//     pares.push(number);
//   }else{
//     impares.push(number);
//   } 
// }

// if (impares.length > 0){
//   console.log('Esses números são impares:',impares);
// }else{
//   console.log('Nenhum valor impar encontrado');
// }
// Utilizando for, descubra o menor valor contido no array e imprima-o.

// let cont = 1;

// for (let number1 of numbers){

//   for (let number2 of numbers){
//     if (number1 < number2){
//       cont += 1;
//     }
//   }

//   if (cont === (numbers.length - 1)){
//     console.log(number1,'E o menor número da lista');
//     break;
//   }else{
//     cont = 0
//   }
// }

// Utilizando for, crie um array que vá de 1 a 25 e imprima o resultado.
let lista = [];

for (let index = 1; index <= 25; index += 1){
  lista.push(index)
}

console.log(lista);
// Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.

for (let item of lista){
  console.log(item / 2)
}


let fatorial = 1;

for (let index = 10; index > 0; index -= 1) {
  fatorial *= index;
}

console.log(fatorial);