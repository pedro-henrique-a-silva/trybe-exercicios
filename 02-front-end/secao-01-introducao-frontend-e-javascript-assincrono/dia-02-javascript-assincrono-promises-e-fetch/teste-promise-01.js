// função que gera um número aleatório
const generateRandomNumber = () => Math.round(Math.random() * 10);

// promise resolvida retornando o número aleatório
// const resolvedPromise = () =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const randomNumber = generateRandomNumber();
//       resolve(randomNumber);
//     }, 1000);
// });

// console.log(resolvedPromise());

// promise rejeitada retornando um objeto de erro
// const rejectedPromise = () =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const randomNumber = generateRandomNumber();
//       reject(new Error(`O número ${randomNumber} é inválido.`));
//     }, 1000);
//   });

const testePromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = generateRandomNumber();
      if (randomNumber > 5) {
        resolve(randomNumber);
      } else {
        reject(randomNumber);

      }
    }, 1000);
  });

testePromise()
  .then((response) => console.log(`resolvido numero ${response}`))
  .catch((error) => console.log(`Erro numero ${error}`))