const express = require('express')
const router = express.Router()
const {
    addNotice,
    fetchNotice,
    upNotice,
    delNotice
} = require('../dbcontrollers/notice.controller')

router.post('/postNot',addNotice)

router.get('/getNot',fetchNotice)

router.put('/putNot',upNotice)

router.delete('/delNot',delNotice)

module.exports = router