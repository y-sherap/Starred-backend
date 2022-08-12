const { Playlist } = require('../models')

const createPlaylist = async (req, res) => {
  try {
    let userId = parseInt(req.params.user_id)
    let playlistBody = {
      userId,
      ...req.body
    }
    let playlist = await Playlist.create(playlistBody)
    res.send(playlist)
  } catch (error) {
    throw error
  }
}

const getAllPlaylist = async (req, res) => {
  try {
    let allPlaylists = await Playlist.findAll()
    res.send(allPlaylists)
  } catch (error) {
    throw error
  }
}

const getPlaylistByUser = async (req, res) => {
  try {
    user_Id = parseInt(req.params.user_id)
    let allPlaylists = await Playlist.findAll({where: { userId: user_Id }})
    res.send(allPlaylists)
  } catch (error) {
    throw error
  }
}

const updatePlaylist = async (req, res) => {
  try {
    let playlistId = req.params.playlist_id
    let updatedPlaylist = await Playlist.update(req.body, {
      where: {
        id: playlistId
      }
    })
    res.send(updatedPlaylist)
  } catch (error) {
    throw error
  }
}

const deletePlaylist = async (req, res) => {
  try {
    let playlistId = parseInt(req.params.playlist_id)
    await Playlist.destroy({ where: { id: playlistId } })
    res.send({ message: 'Playlist deleted.' })
  } catch (error) {
    throw error
  }
}

module.exports = {
  getAllPlaylist,
  createPlaylist,
  updatePlaylist,
  deletePlaylist,
  getPlaylistByUser
}
