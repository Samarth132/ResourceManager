const express = require('express')
const router = express.Router()
const {
    addResource,
    fetchResource,
    fetchSemResource,
    upResource,
    delResource
} = require('../dbcontrollers/resource.controller')

router.post('/postRes',addResource)

router.get('/getRes',fetchResource)

router.get('/getSemRes',fetchSemResource)

router.put('/putRes',upResource)

router.delete('/delRes',delResource)

module.exports = router