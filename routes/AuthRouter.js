const Router = require('express').Router()
const controller = require('../controllers/AuthController')

Router.get('/',controller.Login)
Router.post('/register',controller.Register)

module.exports = Router