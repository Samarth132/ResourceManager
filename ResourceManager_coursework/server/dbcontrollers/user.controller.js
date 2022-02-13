const pool = require('../db/db') 
require('dotenv').config()
const jwt = require('jsonwebtoken')

//add resource
async function addUser(req,res){
    const {username, password} = req.body
    let newUser
    try {
        newUser = await pool.query('INSERT INTO users (username, password) VALUES($1,$2)',
        [username, password])
    } catch (err) {
        console.error(err.message)
        res.send(err.message)
    }
    if(newUser){
        res.status(200).json(`${req.body.username} added successfully`)
    }
}

//get resource
async function fetchUser(req,res){
    let allUser
    try {
        allUser = await pool.query('SELECT * FROM users')
    } catch (err) {
        console.error(err.message)
        res.send(err.message)
    }
    if(allUser){
        res.status(200).json(allUser['rows'])
    }
}

//delete resource
async function delUser(req,res){
    const {username} = req.body
    let delUser
    try {
        delUser = await pool.query("DELETE FROM users WHERE username = $1", [username])
    } catch (err) {
        console.error(err.message)
        res.send(err.message)
    }
    if(delUser){
        res.status(200).json(`${username} deleted successfully`)
    }
}

async function userAuth(username, password){
    let authUser
    expiryTime = new Date(
        new Date().getTime() +
        Number(process.env.JWT_EXPIRY_TIMEOUT)
    )
    try {
        authUser = await pool.query('SELECT * FROM users WHERE username = $1 AND password = $2',
        [username, password])
        console.log(authUser['rows'])
    } catch (err) {
        console.error(err.message)
        res.send(err.message)
    }
    if(authUser.rows.length > 0){
        let token = jwt.sign({username: username}, process.env.JWT_SECRET, {
            expiresIn: Number(process.env.JWT_EXPIRY_TIMEOUT),
        })
        console.log(token)
        return 'valid'
    }
    else{
        return 'invalid'
    }
}

module.exports = {
    addUser,
    fetchUser,
    delUser,
    userAuth
}