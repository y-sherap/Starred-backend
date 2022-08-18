const Router = require('express').Router()
const controller = require('../controllers/FollowingController')
const middleware = require('../middleware')

    Router.post('/followingPlaylist',
        middleware.stripToken,
        middleware.verifyToken,
        controller.newFollower)

    Router.get('/following',
        middleware.stripToken,
        middleware.verifyToken,
        controller.getFollowingPlaylists)


module.exports = Router
