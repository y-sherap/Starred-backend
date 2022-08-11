const Router = require('express').Router()
const controller = require('../controllers/SongController')
const middleware = require('../middleware')

Router.post('/:playlist_id', 
middleware.stripToken,
middleware.verifyToken,
controller.createSong,)

Router.delete('/:song_id',
middleware.stripToken,
middleware.verifyToken,
controller.deleteSong,)

Router.get('/:playlist_id/:song_id',
middleware.stripToken,
middleware.verifyToken,
controller.getSongByPlaylistId,)

module.exports = Router
