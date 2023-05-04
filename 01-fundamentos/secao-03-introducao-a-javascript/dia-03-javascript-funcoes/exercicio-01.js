let saldo = 1500;

function somaSaldo(saldo, valor){
  return saldo + valor 
}

function subtrainSaldo(saldo, valor){
  return saldo - valor
}

function multiplicaSaldo(saldo, valor){
  return saldo * valor
}

function divideSaldo(saldo, valor){
  return saldo / valor
}


console.log(somaSaldo(saldo, 300));
console.log(subtrainSaldo(saldo, 300));
console.log(multiplicaSaldo(saldo, 1.3));
console.log(divideSaldo(saldo, 2));