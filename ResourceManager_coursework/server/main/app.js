const express = require('express')
const cors = require('cors')
const app = express()

let port = 8000

//middleware
app.use(cors())
app.use(express.json())

//test route
app.post('/addDept', )

app.listen(port, () =>{
    console.log('Server is running on port : ',port)
})