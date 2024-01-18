'use strict';

module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    publisher: DataTypes.STRING,
    pageQuantity: DataTypes.INTEGER,
  },
  {
    tableName: 'books'
  })
 
  return Book;
};