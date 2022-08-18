'use strict'

module.exports = {

  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('playlists', 
     [
      {
        name:"Luke's Playlist",
        mood:"chill",
        image:"https://www.juxtapoz.com/media/k2/galleries/65309/Christophe-Guye-Galerie-Rinko-Kawauchi-AT043.jpg",
        userId:1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:"Yangtsel's Playlist",
        mood:"nostalgic",
        image:"https://admin.itsnicethat.com/images/SEAaEf60H6F6CtUaJDQPWPEEqC8=/32145/format-webp%7Cwidth-1440/52cbd36b5c3e3c588e0016a4.jpg",
        userId:2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name:"Will's Playlist",
        mood:"calm",
        image:"http://rinkokawauchi.com/en/wp-content/uploads/sites/2/2017/12/RK07_20100207-20100207-_MG_6519-1024x683.jpg",
        userId:3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});


  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('playlists', null, {})
  }
}
