const Router = require('express').Router()
const controller = require('../controllers/PlaylistController')
const middleware = require('../middleware')

Router.get(
  '/all',
  middleware.stripToken,
  middleware.verifyToken,
  controller.getAllPlaylist
)
Router.get(
  '/:user_id',
  controller.getPlaylistByUser
)
Router.post(
  '/:user_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.createPlaylist
)
Router.put(
  '/:playlist_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.updatePlaylist
)
Router.delete(
  '/:playlist_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.deletePlaylist
)


module.exports = Router
