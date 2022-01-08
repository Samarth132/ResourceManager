const express = require('express')
const router = express.Router()
const {
    addSemester,
    fetchSemester,
    upSemester,
    delSemester
} = require('../dbcontrollers/semester.controller')

router.get('/postSem',addSemester)

router.get('/getSem',fetchSemester)

router.get('/putSem',upSemester)

router.get('/delSem',delSemester)

module.exports = router