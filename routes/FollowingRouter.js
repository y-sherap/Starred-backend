const Router = require('express').Router()
const controller = require('../controllers/FollowingController')
const middleware = require('../middleware')

    Router.post('/followingPlaylist',
        middleware.stripToken,
        middleware.verifyToken,
        controller.newFollower)

    Router.get('/following/:userId',
        middleware.stripToken,
        middleware.verifyToken,
        controller.getFollowingPlaylists)

    Router.delete('/:userId/:playlistId',
    middleware.stripToken,
    middleware.verifyToken,
    controller.removeFollowingPlaylist
    )
module.exports = Router
