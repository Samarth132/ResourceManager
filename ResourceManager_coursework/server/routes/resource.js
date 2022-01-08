const express = require('express')
const router = express.Router()
const {
    addResource,
    fetchResource,
    upResource,
    delResource
} = require('../dbcontrollers/resource.controller')

router.post('/postRes',addResource)

router.get('/getRes',fetchResource)

router.put('/putRes',upResource)

router.delete('/delRes',delResource)

module.exports = router