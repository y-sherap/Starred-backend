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

const deleteSong = async (req, res) => {
  try {
    let songId = parseInt(req.params.song_id)
    await Song.destroy({ where: { id: songId } })
    res.send({ message: 'song deleted' })
  } catch (error) {
    throw error
  }
}


const getSongByPlaylistId = async (req, res) => {
  try {
    const songs = await Song.findAll({
      where: { playlistId: req.params.playlist_id },
      include: [{ model: User, foreignKey: 'playlistId' }]
    })
    res.send(songs)
  } catch (error) {
    throw error
  }
}


module.exports = {
  createSong,
  deleteSong,
  getSongByPlaylistId
}



