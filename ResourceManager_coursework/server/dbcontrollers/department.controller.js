//import
const pool = require('../db/db') 
const {v1 : uuid} = require('uuid')

//add department
async function addDepartment(req,res){
    const {deptName} = req.body
    let deptId = uuid()
    let newDept
    try {
        newDept = await pool.query('INSERT INTO departments (deptId, deptName) VALUES($1,$2)', [deptId, deptName])
    } catch (err) {
        console.error(err.message)
        res.send(err.message)
    }
    if(newDept){
        res.status(200).json(`${deptName} added successfully`)
    }
}

//get department
async function fetchDepartment(req,res){
    let allDept
    try {
        allDept = await pool.query('SELECT * FROM departments')
    } catch (err) {
        console.error(err.message)
        res.send(err.message)
    }
    if(allDept){
        res.status(200).json(allDept)
    }
}

//update department
async function upDepartment(req,res){
    const {deptId, deptName} = req.body
    let upDept
    try {
        upDept = await pool.query(`UPDATE departments SET deptName = ${deptName} WHERE deptId = ${deptId}`)
    } catch (err) {
        console.error(err.message)
        res.send(err.message)
    }
    if(upDept){
        res.status(200).json(`${deptName} updated successfully`)
    }
}

//delete department
async function delDepartment(req,res){
    const {deptId} = req.body
    let delDept
    try {
        delDept = await pool.query(`DELETE FROM departments WHERE deptId = ${deptId}`)
    } catch (err) {
        console.error(err.message)
        res.send(err.message)
    }
    if(delDept){
        res.status(200).json(`${deptName} deleted successfully`)
    }
}

module.exports = {
    addDepartment,
    fetchDepartment,
    upDepartment,
    delDepartment
}