const cep = '30130-010';
// console.log('fazendo o fetch agora');
// fetch(`https://viacep.com.br/ws/${cep}/json/`)
//   .then(response => response.json())
//   .then(data => console.log('esse e o meu retorno',data));

// console.log('ja fix minha requisição esperando resposta');

async function getCep () {
  console.log('fazendo o fetch agora com o await');
  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();
    console.log(data);
  } catch(error) {
    console.log(error)
  }
  console.log('fim da função assincrona');
}

getCep()
console.log('ja fix minha requisição esperando resposta');