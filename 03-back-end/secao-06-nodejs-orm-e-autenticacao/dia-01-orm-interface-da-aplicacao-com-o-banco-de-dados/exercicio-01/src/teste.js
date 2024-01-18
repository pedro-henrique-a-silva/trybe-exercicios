const {book} = require('./models');

const testando = async () => {
  await book.create({
    title: "Senhor dos aneis",
    author: "j r r tolkien",
    pageQuantity: 300,
  });
}

testando();