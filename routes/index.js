const express = require('express'),
    router = express.Router(),
    authRouter = require('./auth'),
    categoryRouter = require('./category')
    // itemRouter = require('./item')

router.use('/auth', authRouter)
router.use('/category', categoryRouter)
// router.use('/item', itemRouter)

module.exports = router