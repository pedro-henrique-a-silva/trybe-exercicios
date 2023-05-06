// Exercício 1

let algarismosRomanos = {
  I: 1,   
  V: 5,   
  X: 10,  
  L: 50,  
  C: 100,
  D: 500, 
  M: 1000,
}

function traduzAlgarismosRomanos(numero) {
  let soma = 0;
  
  for (let indice = 0; indice < numero.length; indice += 1) {
    let valorAtual = algarismosRomanos[numero[indice]]
    let valorFrent = algarismosRomanos[numero[indice + 1]]

    if (valorAtual >= valorFrent || indice === (numero.length - 1)) {
      soma += valorAtual
    }else {
      soma -= valorAtual
    }
    
  }

  return soma;
}

let numeroGrego = 'XLVI';

// exercicio 2
let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

function arrayOfNumbers(vector) {
  let numerosPares = []
  for (let arr of vector) {
      for (let value of arr) {
        if (value % 2 === 0) {
          numerosPares.push(value);
        }
    }
  }

  return numerosPares;
}

console.log(arrayOfNumbers(vector));