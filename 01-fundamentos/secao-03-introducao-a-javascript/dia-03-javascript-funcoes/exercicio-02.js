// let clientesTrybeBank = ['Ada', 'John', 'Gus'];

// escreva aqui sua função
//  Exercicio 1, adicionando valores a um array com função
// function addCliente(nome) {
//   if (typeof nome !== 'string'){
//     return 'Nome do cliente, não e um nome válido';
//   }

//   clientesTrybeBank.push(nome)

//   return 'Cliente '+ nome +' adicionado ao banco de clientes';
// }

// console.log(addCliente('Pedro'));
// console.log('Banco de clientes atualizado');
// console.log(clientesTrybeBank);

// Exercicio 2, removendo valores de um array com funções

let clientesTrybeBank = ['Ada', 'John', 'Gus', 'pedro', 'joao'];

function addCliente(nome) {
  if (typeof nome !== 'string'){
    return 'Nome do cliente, não e um nome válido';
  }

  let indiceCliente = clientesTrybeBank.indexOf(nome);

  if (indiceCliente === -1){
    return 'Cliente não existe;'
  }

  clientesTrybeBank.splice(clientesTrybeBank.indexOf(nome),1);

  return 'Cliente '+ nome +' adicionado ao banco de clientes';
}


console.log(addCliente('fulano'));
console.log('Banco de clientes atualizado');
console.log(clientesTrybeBank);