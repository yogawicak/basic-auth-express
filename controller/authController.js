const express = require('express')
const router = express.Router()
const joi = require('@hapi/joi')
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const saltRounds = 12
const jwt = require('jsonwebtoken')

const schema = joi.object().keys({
    username: joi.string().regex(/(^[a-zA-Z0-9]+$)/).min(5).max(20).required(),
    password: joi.string().min(5).required(),
    fullname: joi.string(),
    email: joi.string().email()
})

router.get('/', (req,res) => {
    res.send('auth controller')
})

router.post('/signup', async (req,res,next) => {
    // console.log('123')
    try {
        let result = schema.validate(req.body)
        if (result.error === undefined){
            let username = result.value.username
            let email = result.value.email
            const checkUsernameOrEmail = await User.findOne({ $or:[{username},{email}] })
            if (checkUsernameOrEmail === null){
                result = result.value
                const hashingPassword = await bcrypt.hash(result.password, saltRounds)
                result.password = hashingPassword
                const {username} = await User.create(result)
                const findIdByUsername = await User.findOne({username},{_id:1})
                console.log(findIdByUsername)
                const payload = {_id:findIdByUsername,username:username}
                const token = await jwt.sign(payload,process.env.JWT_TOKEN)
                res.locals.result = {token:token}
                res.locals.messageSuccess = 'Success Create Account'
                next()
            }else{
                // const error = new Error('Username/Email Telah Digunakan');
                res.locals.messageFail = 'Username/Email Telah Digunakan'
                next()
            }
        }else{
            console.log(result.error)
            next(result.error)
        }
    } catch (error) {
        next(error)
    }
})

router.post('/login', async (req,res,next) => {
    try {
        let { username, email, password } = req.body
        console.log(username)
        const condition = username === undefined || username === null ? {email:email} : {username:username}
        console.log(condition)
        const checkAccount = await User.findOne(condition)
        if(checkAccount !== null){
            const comparePassword = await bcrypt.compare(password, checkAccount.password)
            if(comparePassword === true){
                res.locals.messageSuccess = 'Login Successfully'
                const payload = {_id:checkAccount._id,username:checkAccount.username}
                const token = await jwt.sign(payload,process.env.JWT_TOKEN)
                res.locals.result = {token:token}
                next()
            }else{
                res.locals.messageFail = 'Check your Username/Email & Password'
                next()
            }
        }else{
            res.locals.messageFail = 'Check your Username/Email & Password'
            next()
        }
        // const checkPassword = await User.findOne()
        // res.json({
        //     // username:hello
        //     checkAccount
        // })
    } catch (error) {
        // res.status(500)
        next(error)
    }
})


module.exports = router