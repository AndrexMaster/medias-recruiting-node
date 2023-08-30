'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("productsInReceipts", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      receipt_id: {
        type: Sequelize.INTEGER,
        required: true
      },
      product_id: {
        type: Sequelize.INTEGER,
        required: true
      },
      quantity: {
        type: Sequelize.INTEGER,
        required: true
      },
      price: {
        type: Sequelize.DOUBLE(7, 2),
        required: true
      },
    })
  },

  async down (queryInterface, Sequelize) {

  }
};
