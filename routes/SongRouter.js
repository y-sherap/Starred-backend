const Router = require('express').Router()
const controller = require('../controllers/SongController')

Router.post('/:playlist_id', controller.createSong)

module.exports = Router