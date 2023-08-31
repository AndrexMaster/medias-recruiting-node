'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("receipts", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      number: {
        type: Sequelize.INTEGER,
      },
      date: {
        type: Sequelize.DATE,
        defaultValue: new Date().toISOString().slice(0, 19).replace('T', ' ')
      },
      total: {
        type: Sequelize.DOUBLE(14, 2),
        defaultValue: null
      }
    })
  },

  async down (queryInterface, Sequelize) {

  }
};
