const Router = require('express').Router()
const controller = require('../controllers/SongController')

Router.post('/:playlist_id', controller.createSong,
middleware.stripToken,
middleware.verifyToken,
controller.getAllPlaylist)

Router.delete('/:song_id', controller.deleteSong,
middleware.stripToken,
middleware.verifyToken,
controller.getAllPlaylist)

Router.get('/:playlist_id/:song_id', controller.getSongByPlaylistId,
middleware.stripToken,
middleware.verifyToken,
controller.getAllPlaylist)

module.exports = Router