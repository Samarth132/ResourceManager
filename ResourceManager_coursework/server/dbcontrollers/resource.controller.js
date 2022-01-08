const pool = require('../db/db') 
const {v1 : uuid} = require('uuid')

//add resource
async function addResource(req,res){
    const {resName, resLink, resDesc} = req.body
    let deptId = uuid()
    let resId = uuid()
    let newRes
    try {
        newRes = await pool.query('INSERT INTO resources (resId, deptId, resName, resLink, resDesc) VALUES($1,$2,$3,$4,$5)',
        [resId, deptId, resName, resLink, resDesc])
    } catch (err) {
        console.log(err.message)
        res.send(err.message)
    }
    if(newRes){
        res.status(200).json(`${req.body} added successfully`)
    }
}

//get resource
async function fetchResource(req,res){
    let allRes
    try {
        allRes = await pool.query('SELECT * FROM resources')
    } catch (err) {
        console.log(err.message)
        res.send(err.message)
    }
    if(allRes){
        res.status(200).json(allres)
    }
}

//update resource
async function upResource(req,res){
    const {resId, resName, } = req.body
    let upRes
    try {
        upRes = await pool.query(`UPDATE resources SET resName = ${resName} WHERE resId = ${resId}`)
    } catch (err) {
        console.log(err.message)
        res.send(err.message)
    }
    if(upRes){
        res.status(200).json(`${req.body} updated successfully`)
    }
}

//delete resource
async function delResource(req,res){
    const {resId} = req.body
    let delRes
    try {
        delRes = await pool.query(`DELETE FROM resources WHERE resId = ${resId}`)
    } catch (err) {
        console.log(err.message)
        res.send(err.message)
    }
    if(delRes){
        res.status(200).json(`${resName} deleted successfully`)
    }
}

module.exports = {
    addResource,
    fetchResource,
    upResource,
    delResource
}