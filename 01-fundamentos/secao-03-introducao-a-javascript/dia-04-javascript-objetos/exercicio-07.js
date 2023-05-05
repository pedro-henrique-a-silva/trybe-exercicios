let order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};


// Olá, Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701
function customerInfo(order) {
  // Adicione abaixo as informações necessárias.
  let deliveryPersonName = order.order.delivery.deliveryPerson;
  let orderName = order.name;
  let phone = order.phoneNumber;
  let addressStreet = order.address.street;
  let addressNumber = order.address.number;
  let addressApartment = order.address.apartment;
  return 'Olá, '+deliveryPersonName+', entrega para: '+orderName+', Telefone: '+phone+', R. '+addressStreet+', Nº: '+addressNumber+', AP: '+addressApartment;
}

console.log(customerInfo(order))

// Olá, Luiz Silva, o valor total de seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00.
function orderModifier(order) {
  // Adicione abaixo as informações necessárias.
  order.name = 'Luiz Silva';
  order.payment.total = 50;

  let orderName = order.name;
  let orderTotal = order.payment.total;
  return 'Olá, '+orderName+', o valor total de seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ '+orderTotal+',00';
}

console.log(orderModifier(order));