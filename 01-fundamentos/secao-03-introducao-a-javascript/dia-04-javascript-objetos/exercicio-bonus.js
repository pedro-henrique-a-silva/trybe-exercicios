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

// Exercicio 3
let basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];

function contaFrutas(arr) {
  let qtdFrutas = {};

  for (let fruta of arr) {
    if (qtdFrutas[fruta] === undefined) {
      qtdFrutas[fruta] = 1;
    }else {
      qtdFrutas[fruta] += 1;
    }
  }

  return qtdFrutas;
}

function criaOutputCesta() {
  let informaConteudoCesta = 'Sua cesta possui: ';
  
  let conteudoCesta = Object.entries(contaFrutas(basket));
  
  for (let item of conteudoCesta) {
    informaConteudoCesta += item[1]+' '+item[0] + ', '
  }

  return informaConteudoCesta;
}

// Exercicio 4

let moradores = {
  blocoUm: [
    {
      nome: 'Luíza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
  ],
  blocoDois: [
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ],
};

let infosBlocoDois = moradores.blocoDois[moradores.blocoDois.length-1]

let nome = infosBlocoDois.nome;
let sobrenome = infosBlocoDois.sobrenome;
let andar = infosBlocoDois.andar;
let apt = infosBlocoDois.apartamento;

for (let key of Object.keys(moradores)) {
  for (let obj of moradores[key])
    console.log(key, obj.nome, obj.sobrenome);
}

// console.log(nome, sobrenome,'apartamento',apt, 'andar' ,andar, );

// 