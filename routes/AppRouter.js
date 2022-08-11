
const Router = require('express').Router()
const UserRouter = require('./UserRouter')
const PlaylistRouter = require('./PlaylistRouter')
const SongRouter = require('./SongRouter')
const AuthRouter = require('./AuthRouter')

Router.use('/auth', AuthRouter)
Router.use('/playlist', PlaylistRouter)
Router.use('/song', SongRouter)

module.exports = Router
