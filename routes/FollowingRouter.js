const Router = require('express').Router()
const controller = require('../controllers/FollowingController')
const middleware = require('../middleware')

Router.post('/followingPlaylist',controller.newFollower)
Router.get('/following',controller.getFollowingPlaylists)


module.exports = Router
