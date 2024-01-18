'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('books', 
    [
      {
      title: 'Lord of the Rings the two towers',
      author: 'J.R.R Tolkien',
      pageQuantity: 300,
      createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        title: 'Lord of the Rings the Return of the King',
        author: 'J.R.R Tolkien',
        pageQuantity: 300,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('books', null, {});
  }
};
