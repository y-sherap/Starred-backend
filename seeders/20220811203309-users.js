'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
 
     await queryInterface.bulkInsert('users', 
     [
      {
        name: "Luke Richardson",
        email: "lrichardson@gmail.com",
        username: "lrichardson",
        password: "1234"
      },
      {
        name: "Yangtsel Sherap",
        email: "yangtsel.sherap@gmail.com",
        username: "ysherap",
        password: "5678"
      },
      {
        name: "Will Fitzgerald",
        email: "wfitzgeraldn@gmail.com",
        username: "williamsquilliam",
        password: "12345"
      },
    ], {});
  },
  async down (queryInterface, Sequelize) {
  await queryInterface.bulkDelete('users', null, {});

  }
};
