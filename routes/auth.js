const express = require('express'),
    router = express.Router(),
    controller = require('../controllers/authController'),
    validate = require('../middlewares/validate'),
    checkToken = require('../middlewares/checkToken')

router.post('/register', validate(schema.registerValidator), controller.register)
