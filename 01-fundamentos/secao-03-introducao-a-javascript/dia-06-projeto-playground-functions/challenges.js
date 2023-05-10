// const girafa = true;
// const elefante = true;
// const macaco = false;

const compareTrue = (param1, param2) => (param1 && param2);

const splitSentence = (phrase) => phrase.split(' ');

const concatName = (arrayName) => `${arrayName[(arrayName.length - 1)]}, ${arrayName[0]}`;

const footballPoints = (wins, ties) => {
  const winsPoints = 3;
  const tiesPoints = 1;
  if ((typeof wins !== 'number') || (typeof ties !== 'number')) {
    return 'Vitórias e empates precisam ser números';
  }
  return (wins * winsPoints) + (ties * tiesPoints);
};

const highestCount = (arrayNumber) => {
  let count = 0;
  arrayNumber = arrayNumber.sort((a, b) => a - b).reverse();
  for (let number of arrayNumber) {
    if (number === arrayNumber[0]) {
      count += 1;
    }
  }
  return count;
};

const calcTriangleArea = (base, height) => (base * height) / 2;
const calcRectangleArea = (base, height) => base * height;
const calcAllAreas = (base, height, form) => {
  let area = 0;
  if (form !== 'triângulo' && form !== 'retângulo') {
    return 'Não foi possível fazer o cálculo, insira uma forma geométrica válida';
  }
  area = (form === 'triângulo') ? calcTriangleArea(base, height) : calcRectangleArea(base, height);
  return `O valor da área do ${form} é de: ${area}`;
};

const catAndMouse = (mouse, cat1, cat2) => {
  const positionCat1 = (Math.abs(mouse - cat1));
  const positionCat2 = (Math.abs(mouse - cat2));
  if (positionCat1 === positionCat2) {
    return 'os gatos trombam e o rato foge';
  }

  return (positionCat1 < positionCat2) ? 'cat1' : 'cat2';
};

const checkDivisivel = (numero) => {
  const tres = (numero % 3 === 0) ? 'fizz' : '';
  const cinco = (numero % 5 === 0) ? 'buzz' : '';
  return (tres && cinco) ? `${tres}Buzz` : `${tres}${cinco}`;
};

const wordConstruct = (numero) => {
  let word = checkDivisivel(numero);

  if (!word) word = 'bug!';

  return word.trim();
};

const fizzBuzz = (arrayNumber) => {
  const arrayFizzBuzz = [];
  for (let number of arrayNumber) {
    arrayFizzBuzz.push(wordConstruct(number));
  }
  return arrayFizzBuzz;
};

const encode = (word) => {
  const cryptKeys = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  let wordCrypted = '';

  for (let letter of word) {
    if (Object.keys(cryptKeys).includes(letter)) {
      wordCrypted += cryptKeys[letter];
    } else {
      wordCrypted += letter;
    }
  }
  return wordCrypted;
};

const decode = (word) => {
  const decryptKeys = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  let wordDecrypted = '';

  for (let letter of word) {
    if (Object.keys(decryptKeys).includes(letter)) {
      wordDecrypted += decryptKeys[letter];
    } else {
      wordDecrypted += letter;
    }
  }
  return wordDecrypted;
};

const techList = (array, personName) => {
  if (!array || !personName) {
    return [];
  }
  const arrayTechList = [];

  for (let techName of array.sort()) {
    arrayTechList.push({ tech: techName, name: personName });
  }

  return arrayTechList;
};

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

const hydrate = (phrase) => {
  let pattern = /[0-9]/g;
  let onlyNumbers = phrase.match(pattern);
  let soma = 0;
  for (let number of onlyNumbers) {
    soma += Number(number);
  }
  return (soma === 1) ? `${soma} copo de água` : `${soma} copos de água`;
};

