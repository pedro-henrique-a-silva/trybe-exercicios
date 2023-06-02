// removeItem.js

function removeItem(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}
// console.log(removeItem([1, 2, 3, 4], 5));

// myFizzBuzz.js

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// console.log(myFizzBuzz(15));

// encodeDecode.js

const mapString = (objectMap, string) => {
  const splitString = string.split('');
  const mappedArray = [];

  for (let index = 0; index < splitString.length; index += 1) {
    const character = splitString[index];
    const mappedValue = objectMap[character];
    
    if (mappedValue) {
      mappedArray.push(mappedValue);
    } else {
      mappedArray.push(character);
    }
  }

  return mappedArray.join('');
}

const encode = (string) => {
  const map = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  return mapString(map, string);
}

const decode = (string) => {
  const map = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  return mapString(map, string);
}

const techList = (array, personName) => {
  if (!array || !personName || array.length === 0) {
    return 'Vazio!';
  }

  const arrayTechList = [];

  for (let techName of array.sort()) {
    arrayTechList.push({ tech: techName, name: personName });
  }

  return arrayTechList;
}

console.log(techList([], 'Lucas'));

const hydrate = (phrase) => {
  let pattern = /[0-9]/g;
  let onlyNumbers = phrase.match(pattern);
  let soma = 0;
  for (let number of onlyNumbers) {
    soma += Number(number);
  }
  return (soma === 1) ? `${soma} copo de água` : `${soma} copos de água`;
}

// console.log(encode('ola mundo'));
// console.log(decode('12345'));

module.exports = {
  removeItem,
  myFizzBuzz,
  encode,
  decode,
  techList,
  hydrate,
}