'use strict'

module.exports = {


  async up (queryInterface, Sequelize) {
 
     await queryInterface.bulkInsert('playlists', 
     [
      {
        name:"Liked Songs",
        image:"https://misc.scdn.co/liked-songs/liked-songs-300.png",
        userId:1,
        createdAt: new Date(),
        updateAt: new Date()
      },
      {
        name:"Luke's Playlist",
        userId:1,
        createdAt: new Date(),
        updateAt: new Date()
      },
      {
        name:"Yangtsel's Playlist",
        userId:2,
        createdAt: new Date(),
        updateAt: new Date()
      },
      {
        name:"Will's Playlist",
        userId:3,
        createdAt: new Date(),
        updateAt: new Date()
      }
    ], {});

  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('playlists', null, {})
  }
}
