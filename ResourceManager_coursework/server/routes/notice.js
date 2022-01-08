const express = require('express')
const router = express.Router()
const {
    addNotice,
    fetchNotice,
    upNotice,
    delNotice
} = require('../dbcontrollers/notice.controller')

router.get('/postNot',addNotice)

router.get('/getNot',fetchNotice)

router.get('/putNot',upNotice)

router.get('/delNot',delNotice)

module.exports = router