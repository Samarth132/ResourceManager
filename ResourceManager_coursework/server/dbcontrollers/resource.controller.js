const pool = require('../db/db') 
const {v1 : uuid} = require('uuid')

//add resource
async function addResource(req,res){
    const {resName, resLink, resDesc} = req.body
    let semId = req.body.semId
    let resId = uuid()
    let newRes
    try {
        newRes = await pool.query('INSERT INTO resources (resId, semId, resName, resLink, resDesc) VALUES($1,$2,$3,$4,$5)',
        [resId, semId, resName, resLink, resDesc])
    } catch (err) {
        console.error(err.message)
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
        console.error(err.message)
        res.send(err.message)
    }
    if(allRes){
        res.status(200).json(allRes['rows'])
    }
}

async function fetchSemResource(req,res){
    const semId = req.query.semId
    let allRes
    try {
        allRes = await pool.query("SELECT resName,resLink,resDesc FROM resources WHERE semId = $1", [semId])
    } catch (err) {
        console.error(err.message)
        res.send(err.message)
    }
    if(allRes){
        res.status(200).json(allRes['rows'])
    }
}

//update resource
async function upResource(req,res){
    const {resId, resName, resDesc, resLink} = req.body
    let upRes
    try {
        upRes = await pool.query("UPDATE resources SET resName = $1, resDesc = $2, resLink = 3 WHERE resId = $4", [resName, resDesc, resLink, resId])
    } catch (err) {
        console.error(err.message)
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
        delRes = await pool.query("DELETE FROM resources WHERE resId = $1", [resId])
    } catch (err) {
        console.error(err.message)
        res.send(err.message)
    }
    if(delRes){
        res.status(200).json(`resource deleted successfully`)
    }
}

module.exports = {
    addResource,
    fetchResource,
    fetchSemResource,
    upResource,
    delResource
}