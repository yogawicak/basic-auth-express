const router = require('express').Router()
const jwt = require('jsonwebtoken')
const User = require('../models/User')

router.get('/profile', async (req,res,next) => {
    try {
        res.locals.result = res.locals.userData
        res.locals.messageSuccess = 'Success Retrive User Profile'
        next()
    } catch (error) {
        next(error)
    }
})

router.put('/profile', (req,res,next) => {
    const auth = req.get()
})


module.exports = router