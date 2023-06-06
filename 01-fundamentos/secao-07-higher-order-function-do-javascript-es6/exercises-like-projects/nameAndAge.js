const { books } = require('./data/library');

const nameAndAge = () => {
  const authorAge = books.map((book) => (
    { author: book.author.name, age: (book.releaseYear - book.author.birthYear) }));

  return authorAge.sort((a, b) => a.age - b.age);
};

module.exports = { nameAndAge };
