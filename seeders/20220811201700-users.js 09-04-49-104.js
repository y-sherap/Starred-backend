'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
 
     await queryInterface.bulkInsert('users', 
     [
      {
        name: "Luke Richardson",
        email: "lrichardson@gmail.com",
        username: "lrichardson",
        password: "1234",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Yangtsel Sherap",
        email: "yangtsel.sherap@gmail.com",
        username: "ysherap",
        password: "123454",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Will Fitzgerald",
        email: "wfitzgeraldn@gmail.com",
        username: "williamsquilliam",
        password: "12345",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },
  async down (queryInterface, Sequelize) {
  await queryInterface.bulkDelete('users', null, {});

  }
};
