'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const generateProducts = () => {
      const sampleProducts = [];

      for (let i = 0; i < 10; i++) {
        const price = Math.random() * (9999 - 0.01) + 0.01;

        sampleProducts.push({
          name: `Product ${10 - (10 - i) + 1}`,
          price: price,
        });
      }

      return sampleProducts;
    };

    await queryInterface.bulkInsert('products', generateProducts())
  },

  async down (queryInterface, Sequelize) {

  }
};
