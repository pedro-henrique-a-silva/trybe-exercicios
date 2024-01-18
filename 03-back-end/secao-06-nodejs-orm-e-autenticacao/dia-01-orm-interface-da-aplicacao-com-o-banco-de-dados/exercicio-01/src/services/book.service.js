const { Book } = require('../models')
 
const getAll = async () => {
  const books = await Book.findAll({
    order: [['title', 'ASC']],
  });
  return books;
}

const getById = async (bookId) => {
  const book = await Book.findByPk(bookId);

  return book
}

const create = async ({ title, author, pageQuantity, publisher }) => {
  const book = await Book.create({ title, author, pageQuantity, publisher });
  return book;
};

const update = async (id, { title, author, pageQuantity, publisher }) => {
  const [updated] = await Book.update(
    {
      title,
      author,
      pageQuantity,
      publisher,
    },
    { where: { id } }
  );

  return updated;
};

const remove = async (bookId) => {
  const deleted = await Book.destroy({where: {id: bookId, },});

  return deleted
}



const getByAuthor = async (author) => {
  const books = await Book.findAll({
    where: { author },
    order: [['title', 'ASC']],
  });
  return books;
};




module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
  getByAuthor,
}