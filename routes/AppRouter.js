
const Router = require('express').Router()
// const UserRouter = require('./UserRouter')
const PlaylistRouter = require('./PlaylistRouter')
// const SongRouter = require('./SongRouter')

// Router.use('/user', UserRouter)
Router.use('/playlist', PlaylistRouter)


// Router.use('/song', SongRouter)

module.exports = Router
