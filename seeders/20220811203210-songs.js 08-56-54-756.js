'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'songs',
      [
        {
          title: 'Running Up That Hill',
          artist: 'Kate Bush',
          duration: '5:00',
          image:
            'https://i.scdn.co/image/ab67616d0000b27396ab64f52273635308b6bf27',
          playlistId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Closer To The Heart',
          artist: 'Rush',
          duration: '2:52',
          image:
            'https://upload.wikimedia.org/wikipedia/en/a/a6/Closer_to_the_Heart.jpg',
          playlistId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Bandit',
          artist: 'KUURO',
          duration: '2:45',
          image:
            'https://static.wikia.nocookie.net/monstercat/images/b/b9/KUURO_-_Bandit.jpg/revision/latest?cb=20170701234618',
          playlistId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Revenger',
          artist: 'F.O.O.L',
          duration: '3:43',
          image:
            'https://i1.sndcdn.com/artworks-xlZjOBOOoipeWfVA-SusMcQ-t500x500.jpg',
          playlistId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Wow.',
          artist: 'Post Malone',
          duration: '2:30',
          image:
            'https://i1.sndcdn.com/artworks-000570657734-vdf6xn-t500x500.jpg',
          playlistId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'sTraNgeRs',
          artist: 'Bring Me The Horizon',
          duration: '3:16',
          image:
            'https://i.scdn.co/image/ab67616d0000b27325580fd82993317d2ac089d9',
          playlistId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('songs', null, {})
  }
}
