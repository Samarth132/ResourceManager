const express = require('express')
const router = express.Router()
const {
    addDepartment,
    fetchDepartment,
    upDepartment,
    delDepartment
} = require('../dbcontrollers/department.controller')

router.post('/postDept',addDepartment)

router.get('/getDept',fetchDepartment)

router.put('/putDept',upDepartment)

router.delete('/delDept',delDepartment)

module.exports = router