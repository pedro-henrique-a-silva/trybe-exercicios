


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let indexFrente = 1; indexFrente < numbers.length; indexFrente += 1) {
  for (let indexTras = 0; indexTras < indexFrente; indexTras += 1) {
    if (numbers[indexFrente] < numbers[indexTras]) {
      let position = numbers[indexFrente];
      numbers[indexFrente] = numbers[indexTras];
      numbers[indexTras] = position;
    }
  }
}

console.log(numbers);

