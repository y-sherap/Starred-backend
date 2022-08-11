const Router = require('express').Router()
const controller = require('../controllers/UserController')
const middleware = require('../middleware')

Router.get('/:user_id',middleware.stripToken,middleware.verifyToken,controller.GetUser)

module.exports = Router