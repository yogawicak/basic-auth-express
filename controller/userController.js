const router = require('express').Router()
const jwt = require('jsonwebtoken')
const User = require('../models/User')

router.get('/profile', async (req,res,next) => {
    const auth = req.get('authorization').split(' ')[1]
    const {_id,username} = jwt.verify(auth,process.env.JWT_TOKEN)
    const checkUser = await User.findById(_id)
    res.locals.messageSuccess = 'Success Retrive Profile Information'
    res.locals.result = checkUser
    next()
    // console.log(checkUser)
    // if (_id ) {
        
    // }
})


module.exports = router