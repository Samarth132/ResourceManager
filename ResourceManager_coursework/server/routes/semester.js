const express = require('express')
const router = express.Router()
const {
    addSemester,
    fetchSemester,
    upSemester,
    delSemester
} = require('../dbcontrollers/semester.controller')

router.post('/postSem',addSemester)

router.get('/getSem',fetchSemester)

router.put('/putSem',upSemester)

router.delete('/delSem',delSemester)

module.exports = router