const express = require('express')
const cors = require('cors')
const app = express()
const cookieParser = require('cookie-parser')

const routePath = '../routes/'
const routes = {
    "/api/department" : 'department',
    "/api/notice" : 'notice',
    "/api/resource" : 'resource',
    "/api/semester" : 'semester',
    "/api/user" : 'user'
}

let rt = Object.keys(routes)
let port = 8000

//middleware
app.use(cors())
app.use(cookieParser())
app.use(express.json())
rt.forEach((k)=>{
    let rPath = routePath + routes[k]
    app.use(k, require(rPath))
})

app.listen(port, () =>{
    console.log('Server is running on port : ',port)
})