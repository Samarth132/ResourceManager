const express = require('express')
const cors = require('cors')
const app = express()
const pool = require('../db/db') 
const {v1 : uuid} = require('uuid')

let port = 8000

//middleware
app.use(cors())
app.use(express.json())

//test route
app.post('/addDept', async (req,res)=>{
    const {deptName} = req.body
    let deptId = uuid()
    let newDept
    try {
        newDept = await pool.query('INSERT INTO departments (deptId, deptName) VALUES($1,$2)', [deptId, deptName])
    } catch (err) {
        console.log(err.message)
        res.send(err.message)
    }
    if(newDept){
        res.status(200).json(`${deptName} added successfully`)
    }
})

app.listen(port, () =>{
    console.log('Server is running on port : ',port)
})