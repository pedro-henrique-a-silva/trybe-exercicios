let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function encontraCliente(cliente){
  let clienteEncontrado = clientesTrybeBank.indexOf(cliente);

  return clienteEncontrado;
}

function removeCliente(cliente) {
  if (!typeof cliente === 'string') {
    return 'O Parametro Passado deve ser do Tipo String'; 
  } 

  let clienteEncontrado = encontraCliente(cliente);

  if (clienteEncontrado !== -1) {
    clientesTrybeBank.splice(clienteEncontrado, 1);
    return 'Cliente Exluido com Sucesso';
  }

  return 'Cliente não encontrado';

};


console.log(removeCliente('Ada'))
console.log(clientesTrybeBank)