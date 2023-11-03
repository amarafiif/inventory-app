const express = require('express'),
    router = express.Router(),
    controller = require('../controllers/itemController'),
    multer = require('../middlewares/multer'),
    multerLib = require('multer')()


router.post('/create', multerLib.single('image'), controller.create)
router.post('/create-with-imagekit', multerLib.single('image'), controller.createWithImageKit)
router.get('/list', controller.getItems)
router.post('/upload', multerLib.single('image'), controller.uploadToImageKit)

module.exports = router
