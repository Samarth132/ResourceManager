const express = require('express')
const router = express.Router()
const {
    addDepartment,
    fetchDepartment,
    upDepartment,
    delDepartment
} = require('../dbcontrollers/department.controller')

router.get('/postDept',addDepartment)

router.get('/getDept',fetchDepartment)

router.get('/putDept',upDepartment)

router.get('/delDept',delDepartment)

module.exports = router