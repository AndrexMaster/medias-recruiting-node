'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("products", {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        name: {
          type: Sequelize.STRING
        },
        price: {
          type: Sequelize.DOUBLE(7, 2)
        }
    })
  },

  async down (queryInterface, Sequelize) {

  }
};
