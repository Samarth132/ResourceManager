const express = require('express')
const router = express.Router()
const {
    addResource,
    fetchResource,
    upResource,
    delResource
} = require('../dbcontrollers/resource.controller')

router.get('/postRes',addResource)

router.get('/getRes',fetchResource)

router.get('/putRes',upResource)

router.get('/delRes',delResource)

module.exports = router