const products = ['Arroz', 'Feijao', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

// const prods = products.map((productName, index) => ({[productName]: prices[index]}));

const generateProds = (listProducts, priceProducts) => listProducts.map((productName, index) => (
  {[productName]: priceProducts[index]}))

console.log(generateProds(products, prices));