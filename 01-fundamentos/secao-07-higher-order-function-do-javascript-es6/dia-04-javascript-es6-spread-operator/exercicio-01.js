// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'melao', 'maça', 'tangirina'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['leite condensado', 'granulado', 'chocolate'];

const fruitSalad = (fruit, additional) => [...fruit, ...additional];

console.log(fruitSalad(specialFruit, additionalItens));