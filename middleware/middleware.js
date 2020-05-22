/**
 * status : success,fail,error
 * klo fail kesalahannya dilempar di data
 * klo error ada messagenya
 * 
 * sample error
 * {
 *   "status" : "error",
 *  "message" : "Unable to communicate with database"
 *  }
 * failResult = 400
 * successResult = 200
 * Unauthorized = 401
 * Unprocessable Entity (jsonnya salah) = 422
 * 
 * Error aplikasi masuk ke throw catch
 * Error logic dibikin sendiri pke res local
 */
const jwt = require('jsonwebtoken')
const User = require('../models/User')

const formatrest = (req,res,next) => {
    const failResult = {
        status:'fail',
        message:res.locals.messageFail
    }
    const successResult = {
        status:'success',
        message:res.locals.messageSuccess,
        data: res.locals.result
    }
    // console.log(res.locals.messageFail,res.locals.messageSuccess)
   if(res.locals.messageFail !== undefined){
        res.json(failResult)
   }else if (res.locals.messageSuccess !== undefined) {
        res.json(successResult)
   }else{
    next()
   }
}

const checkTokenUser = async (req,res,next) => {
    try {
        const auth = req.get('authorization').split(' ')[1]
        const {_id} = jwt.verify(auth,process.env.JWT_TOKEN)
        const checkUser = await User.findById(_id)
        res.locals.userData = checkUser
        next()
    } catch (error) {
        next(error)
    }
}

const notFound = (req,res,next) => {
    res.status(404)
    const error = new Error('Not Found - ' + req.originalUrl);
    next(error)
} 

const errorHandler = (error,req,res,next) => {
    if (res.statusCode !== 404) {
        res.status(500)
    }
    // res.status(res.statusCode || 500)
    // console.log(res.statusCode)
    res.json({
        status:'error',
        message: error.message,
        stack: error.stack
    })
}

module.exports = {
    notFound,
    errorHandler,
    formatrest,
    checkTokenUser,
}