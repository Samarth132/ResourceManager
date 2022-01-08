const pool = require('../db/db') 
const {v1 : uuid} = require('uuid')

//add semester
async function addSemester(req,res){
    const {semName} = req.body
    let deptId = uuid()
    let semId = uuid()
    let newSem
    try {
        newSem = await pool.query('INSERT INTO semesters (semId, deptId, semName) VALUES($1,$2,$3)', [semId, deptId, semName])
    } catch (err) {
        console.error(err.message)
        res.send(err.message)
    }
    if(newSem){
        res.status(200).json(`${semName} added successfully`)
    }
}

//get semester
async function fetchSemester(req,res){
    let allSem
    try {
        allSem = await pool.query('SELECT * FROM semesters')
    } catch (err) {
        console.error(err.message)
        res.send(err.message)
    }
    if(allSem){
        res.status(200).json(allSem)
    }
}

//update semester
async function upSemester(req,res){
    const {semId, semName} = req.body
    let upSem
    try {
        upSem = await pool.query(`UPDATE semesters SET semName = ${semName} WHERE semId = ${semId}`)
    } catch (err) {
        console.error(err.message)
        res.send(err.message)
    }
    if(upSem){
        res.status(200).json(`${semName} updated successfully`)
    }
}

//delete semester
async function delSemester(req,res){
    const {semId} = req.body
    let delSem
    try {
        delSem = await pool.query(`DELETE FROM semesters WHERE semId = ${semId}`)
    } catch (err) {
        console.error(err.message)
        res.send(err.message)
    }
    if(delSem){
        res.status(200).json(`${SemName} deleted successfully`)
    }
}

module.exports = {
    addSemester,
    fetchSemester,
    upSemester,
    delSemester
}