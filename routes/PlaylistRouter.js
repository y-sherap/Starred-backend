const Router = require('express').Router()
const controller = require('../controllers/PlaylistController')

Router.get('/all', controller.getAllPlaylist)
Router.post('/:user_id', controller.createPlaylist)
Router.put('/:playlist_id', controller.updatePlaylist)
Router.delete('/:playlist_id', controller.deletePlaylist)

module.exports = Router
