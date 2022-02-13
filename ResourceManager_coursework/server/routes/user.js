const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const {
    addUser,
    fetchUser,
    delUser,
    userAuth
} = require('../dbcontrollers/user.controller')

router.post('/postUser',addUser)

router.get('/getUser',fetchUser)

router.delete('/delUser',delUser)

router.post('/login',async (req,res)=>{
    let {username, password} = req.body
    let logRes = await userAuth(username, password)
    console.log(logRes)
    if(logRes === 'valid'){
        res.cookie("tokenKey", logRes)
        res.status(200).json('user login success')
    }  
    else{
        res.json("invalid")
    }
})

router.get('/logout',(req,res)=>{
    res.clearCookie(process.env.TOKEN_KEY)
    res.status(200).json('user logout success')

})

router.get('/getCookie',(req,res)=>{
    res.status(200).send(req.cookies)
})

module.exports = router
