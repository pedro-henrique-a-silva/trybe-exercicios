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

    if (valorAtual < valorFrent) {
      soma += algarismosRomanos[numero[indice + 1]] - algarismosRomanos[numero[indice]]
      break;
    }
    soma += algarismosRomanos[numero[indice]];
  }

  return soma

}

let numero = 'XIX';
console.log(traduzAlgarismosRomanos(numero));