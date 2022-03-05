'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('movies', 
    [{
      name: 'First Movie',
      time: '1:05',
      rating: 5.5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Second Movie',
      time: '2:05',
      rating: 8.3,
      createdAt: new Date(),
      updatedAt: new Date()
    }]
    
    );
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('movies', null, {});
  }
};
