// let word = 'banana';
// let palavraInvertida = '';

// for (let index = (word.length-1); index >= 0; index -= 1){
//   palavraInvertida += word[index];
// }

// console.log(palavraInvertida);


// let array = ['java', 'javascript', 'python', 'html', 'css'];
// let maiorPalavra = '';
// let tamanhoPalavra = 0;

// for (let word of array){
//   if (word.length > tamanhoPalavra){
//     maiorPalavra = word;
//     tamanhoPalavra = word.length;
//   }
// }

// console.log('A maior palavra é ',maiorPalavra,'com',tamanhoPalavra,'caracteres');
let cont = 0;
let numPrimos = [];

for (let index = 2; index <= 50; index += 1){
  for (let index2 = 2; index2 <= 50; index2 += 1){
    if (index % index2 === 0){
      cont += 1;
    }
  }
  
  if (cont === 1){
    if (index % 1 === 0){
      numPrimos.push(index)
    }
  }
  cont = 0;
}

console.log(numPrimos);