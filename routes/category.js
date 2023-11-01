const { categories } = require('../models')

const express = require('express'),
    router = express.Router(),
    controller = require('../controllers/categoryController')


router.post('/create', controller.create)
router.get('/list', controller.getCategory)

module.exports = router
