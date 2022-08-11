const { Song } = require('../models')

const createSong = async (req, res) => {
  try {
    let playlistId = req.params.playlist_id
    let songBody = {
      playlistId,
      ...req.body
    }
    let song = await Song.create(songBody)
    res.send(song)
  } catch (error) {
    throw error
  }
}

module.exports = {
  createSong
}


// getSongsByPlaylistId
// createSong
// deleteSong
