// Desafio 11 - Crie a função generatePhoneNumber
const countNumbers = (array) => {
  const countNumber = {};
  for (let value of array) {
    if (countNumber[value] === undefined) {
      countNumber[value] = 1;
    } else {
      countNumber[value] += 1;
    }
  }

  return (Object.values(countNumber).sort().reverse()[0] < 3);
};

const verifyNumberBetween9And0 = (array) => {
  for (let value of array) {
    if (value > 9 || value < 0) {
      return false;
    }
  }
  return true;
};

const generatePhoneNumber = (arrayNumber) => {
  if (arrayNumber.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  if (!verifyNumberBetween9And0(arrayNumber) || !countNumbers(arrayNumber)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  const parte1 = arrayNumber.slice(0, 2).join().replaceAll(',', '');
  const parte2 = arrayNumber.slice(2, 7).join().replaceAll(',', '');
  const parte3 = arrayNumber.slice(-4).join().replaceAll(',', '');

  return `(${parte1}) ${parte2}-${parte3}`;
};

// Desafio 12 -  Crie a função triangleCheck
const triangleCheck = (lineA, lineB, lineC) => {
  const lineValuesObj = {
    A: { value: lineA, soma: lineB + lineC, sub: Math.abs(lineB - lineC) },
    B: { value: lineB, soma: lineA + lineC, sub: Math.abs(lineA - lineC) },
    C: { value: lineC, soma: lineA + lineB, sub: Math.abs(lineA - lineB) },
  };

  for (let key of Object.keys(lineValuesObj)) {
    if (lineValuesObj[key].value > lineValuesObj[key].soma
      || lineValuesObj[key].value < lineValuesObj[key].sub) {
      return false;
    }
  }
  return true;
};

// Desafio 13 - Crie a função hydrate
const hydrate = (phrase) => {
  let pattern = /[0-9]/g;
  let onlyNumbers = phrase.match(pattern);
  let soma = 0;
  for (let number of onlyNumbers) {
    soma += Number(number);
  }
  return (soma === 1) ? `${soma} copo de água` : `${soma} copos de água`;
};

/* eslint no-undef: 0 */

// Não modifique essas linhas
module.exports = {
  generatePhoneNumber: typeof generatePhoneNumber === 'function' ? generatePhoneNumber : (() => {}),
  triangleCheck: typeof triangleCheck === 'function' ? triangleCheck : (() => {}),
  hydrate: typeof hydrate === 'function' ? hydrate : (() => {}),
};
