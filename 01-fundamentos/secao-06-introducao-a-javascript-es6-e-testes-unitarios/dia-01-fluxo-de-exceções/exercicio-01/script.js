// Primeira parte
const promo = [
  {product: 'bola de beach tennis', price: 29.99},
  {product: 'mochila de trilha 20 litros', price: 120.99},
  {product: 'capacete de ciclista', price: 180.59},
  {product: 'toalha compacta de secagem', price: 39.99},
  {product: 'kit 5 camisetas Dry Fit', price: 99.99},
  {product: 'caneleiras de peso - 3kg (par)', price: 44.99},
  {product: 'bola de ginástica e pilates', price: 149.59},
  {product: 'óculos de natação', price: 18.99},
  {product: 'capa protetora de prancha de surf', price: 89.59},
  {product: 'bola de basquete', price: 39.99},
];


const button = document.querySelector('#send-button');

const verificaNome = (nome) => {
  if (nome === '' || typeof nome === 'number') {
    throw new Error('Precisa digitar um nome valido');
  }
}

const verificaNumero = (number) => {
  if ((typeof number !== 'number') || (number < 0) || (number > 10)) {
    throw new Error('Precisa digitar uma promo valida');
  }
}

button.addEventListener('click', () => {
  let name = document.querySelector('#name-id').value;
  let number = document.querySelector('#number-id').value;

  try {
    verificaNome(name);
    verificaNumero(Number(number));

    showPromo(name, number);
  } catch (error) {
    alert(error.message);
  }

});

const showPromo = (name, number) => {
  const firstText = document.querySelector('#text-initial');
  const secondText = document.querySelector('#text-final');
  const productObject = checkNumber(parseInt(number));

  firstText.innerHTML = `Boas-vindas, ${name}!`;
  secondText.innerHTML = `A promoção do dia é: 
    ${productObject.product} no valor de R$ ${productObject.price}`;
}

// Segunda parte
const checkNumber = (number) => {
  return promo[number - 1];
}