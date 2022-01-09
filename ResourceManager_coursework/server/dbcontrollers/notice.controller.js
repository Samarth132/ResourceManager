const pool = require('../db/db') 
const {v1 : uuid} = require('uuid')

//add Notice
async function addNotice(req,res){
    const {notName, notLink, notDesc} = req.body
    let deptId = uuid()
    let notId = uuid()
    let newNot
    try {
        newNot = await pool.query('INSERT INTO notices (notId, deptId, notName, notLink, notDesc) VALUES($1,$2,$3,$4,$5)',
        [notId, deptId, notName, notLink, notDesc])
    } catch (err) {
        console.error(err.message)
        res.send(err.message)
    }
    if(newNot){
        res.status(200).json(`${req.body} added successfully`)
    }
}

//get Notice
async function fetchNotice(req,res){
    let allNot
    try {
        allNot = await pool.query('SELECT * FROM notices')
    } catch (err) {
        console.error(err.message)
        res.send(err.message)
    }
    if(allNot){
        res.status(200).json(allNot['rows'])
    }
}

//update Notice
async function upNotice(req,res){
    const {notId, notName, } = req.body
    let upNot
    try {
        upNot = await pool.query("UPDATE notices SET notName = $1 WHERE notId = $2", [notName, notId])
    } catch (err) {
        console.error(err.message)
        res.send(err.message)
    }
    if(upNot){
        res.status(200).json(`${req.body} updated successfully`)
    }
}

//delete Notice
async function delNotice(req,res){
    const {notId} = req.body
    let delNot
    try {
        delNot = await pool.query("DELETE FROM notices WHERE notId = $1", [notId])
    } catch (err) {
        console.error(err.message)
        res.send(err.message)
    }
    if(delNot){
        res.status(200).json(`notice deleted successfully`)
    }
}

module.exports = {
    addNotice,
    fetchNotice,
    upNotice,
    delNotice
}