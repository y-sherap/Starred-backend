
const Router = require('express').Router();
const SongRouter = require('./SongRouter')


Router.use('/song', SongRouter)


module.exports = Router;