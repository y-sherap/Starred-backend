const Router = require('express').Router()

Router.use('/playlist', PlaylistRouter)
Router.use('/song', SongRouter)

module.exports = Router
