// Exercicio 1

let a = 5;
let b = 100;
let c = 20;

console.log('=============')
console.log('Exercicio 1')
console.log('=============')
// Adição (a + b)
console.log(a + b)
// Subtração (a - b)
console.log(a - b)
// Multiplicação (a * b)
console.log(a * b)
// Divisão (a / b)
console.log(a / b)
// Módulo (a % b)
console.log(a % b)

// Exercicio 2
console.log('=============')
console.log('Exercicio 2')
console.log('=============')
if (a > b){
  console.log(a + " e maior do que "+ b)
}else {
  console.log(b + " e maior do que "+ a)
}

// Exercicio 3
console.log('=============')
console.log('Exercicio 3')
console.log('=============')
if ((a > b) && (a > c)){
  console.log(a + " e maior do que "+ b + " e do que "+ c)
}else if ((b > a) && (b > c)){
  console.log(b + " e maior do que "+ a + " e do que "+ c)
}else {
  console.log(c + " é o maior numero")
}


// Exercicio 4
console.log('=============')
console.log('Exercicio 4')
console.log('=============')

a = 0;

if (a > 0){
  console.log('Número positivo')
}else if (a < 0){
  console.log('Número negativo')
}else{
  console.log('Número igual a zero')
}


// Exercicio 5
console.log('=============')
console.log('Exercicio 5')
console.log('=============')

let angulo1 = -60;
let angulo2 = 60;
let angulo3 = 60;


if ((!(angulo1) && (angulo2) && (angulo3)) || (angulo1 < 0) || (angulo2 < 0) || angulo3 < 0) {
  console.log('Valores 0 e negativos não são valores de angulos válidos')
}else if ((angulo1 + angulo2 + angulo3) === 180){
  console.log('Triangulo válido')
}


// Exercicio 6
console.log('=============')
console.log('Exercicio 6')
console.log('=============')

let pecaXadrez = 'cavalo';

switch (pecaXadrez){
  case "piao":
    console.log('Movimento so para frente, apenas 1 casa');
    break;
  case "rei":
    console.log('Movimento em qualquer direção, apenas 1 casa');
    break;
  case "rainha":
    console.log('Movimento em qualquer direção, quantas casas quiser');
    break;
  case "cavalo":
    console.log('Movimento em "L", uma quantidade de 4 casas');
    break;
  case "bispo":
    console.log("Movimento em diagonal, quantas casas quiser");
    break;
  case "torre":
    console.log("Movimento na horizontal e vertical, quantas casas quiser");
    break;

}

// Exercicio 7
console.log('=============')
console.log('Exercicio 7')
console.log('=============')


let porcento = 90;

if ((porcento < 0) && (porcento >100)){
  console.log('Erro: nota invalida')
}else if (porcento >= 90) {
  console.log('Nota A')
}else if (porcento >= 80){
  console.log("Nota B")
}else if (porcento >= 70){
  console.log('Nota C')
}else if (porcento >= 60){
  console.log('Nota D')
}else if (porcento >= 50){
  console.log('Nota E')
}else {
  console.log('Nota F')
}


// Exercicio 8
console.log('=============')
console.log('Exercicio 8')
console.log('=============')

let numPar1 = 1;
let numPar2 = 7;
let numPar3 = 10;

if ((numPar1 % 2 === 0) || (numPar2 % 2 === 0) || (numPar3 % 2 === 0)){
  console.log('Pelo menos um número e par')
}else{
  console.log('Nenhum número e par')
}


// Exercicio 9
console.log('=============')
console.log('Exercicio 9')
console.log('=============')

let numImpar1 = 2;
let numImpar2 = 8;
let numImpar3 = 11;

if ((numImpar1 % 2 !== 0) || (numImpar2 % 2 !== 0) || (numImpar3 % 2 !== 0)){
  console.log('Pelo menos um número e Impar')
}else{
  console.log('Nenhum número e Impar')
}


// Exercicio 10
console.log('=============')
console.log('Exercicio 10')
console.log('=============')

let valorCusto = 100;
let valorVenda = 180;
let qtdUnidades = 20;
let valorCustoTotal = 0;
let lucro = 0;

if (!(valorCusto < 0) || (valorVenda < 0)){
  valorCustoTotal = valorCusto * 1.2;
  lucro = valorVenda - valorCustoTotal;
  console.log('Custo total do produto '+valorCustoTotal)
  console.log('Custo total do produto por '+qtdUnidades +' unidades '+valorCustoTotal*qtdUnidades)
  console.log('Valor de venda do produto por unidade '+valorVenda)
  console.log('Valor de venda do produto por '+qtdUnidades +' unidades '+valorVenda*qtdUnidades)
  console.log('lucro total '+ lucro*qtdUnidades)
}

// Exercicio 11
console.log('=============')
console.log('Exercicio 11')
console.log('=============')

let salarioBruto = 2300.00;
let salarioBase = 0;
let salarioLiquido = 0;

if ((salarioBruto <= 0)){
  console.log('Salario não pode ser negativo');
}else if (salarioBruto > 5189.82){
  salarioBase = salarioBruto - 570.88;
  console.log('Salário após dedução de R$ 570,88 do INSS:', salarioBase)
}else if (salarioBruto >= 2594.93){
  salarioBase = salarioBruto - (salarioBruto * 0.11);
  console.log('Salário após dedução de 11% do INSS:', salarioBase)
}else if (salarioBruto >= 1556.95) {
  salarioBase = salarioBruto - (salarioBruto * 0.09);
  console.log('Salário após dedução de 9% do INSS:', salarioBase)
}else{
  salarioBase = salarioBruto - (salarioBruto * 0.08);
  console.log('Salário após dedução de 8% do INSS:', salarioBase)
}


if (salarioBase <= 0){
  console.log('Salário base não pode ser negativo');
}else if (salarioBase > 4664.68){
  salarioLiquido = salarioBase - ((salarioBase * 27.5)/100);
  console.log('Salario liguido apos dedução de 27,5%:', salarioLiquido);
  // Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto
}else if (salarioBase >= 3751.06){
  salarioLiquido = salarioBase - ((salarioBase * 22.5)/100);
  console.log('Salario liguido apos dedução de 22,5%:', salarioLiquido);
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
}else if (salarioBase >= 2826.66){
  salarioLiquido = salarioBase - ((salarioBase * 15)/100);
  console.log('Salario liguido apos dedução de 15%:', salarioLiquido);
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
}else if (salarioBase >= 1903.99) {
  salarioLiquido = salarioBase - ((salarioBase * 7.5)/100);
  console.log('Salario liguido apos dedução de 7,5%:', salarioLiquido);
  // De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
}else {
  salarioLiquido = salarioBase;
  console.log('Salário isento:', salarioLiquido);
  // Até R$ 1.903,98: isento de imposto de renda
}