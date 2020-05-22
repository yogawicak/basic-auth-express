const express = require('express')
const middleware = require('./middleware/middleware')
const volleyball = require('volleyball')
const bodyparser = require('body-parser')
const swagger = require('./swagger/index')
const userController = require('./controller/userController')
require('dotenv').config()
require('./config/db')

//Controller Import
const auth = require('./controller/authController')

//Initialize Application
const app = express()

//HTTP Request Logging
if (process.env.NODE_ENV == 'DEVELOPMENT') {
    app.use(volleyball)
}

// app.use(volleyball)  

//Parser Body Json
app.use(bodyparser.json())


app.get('/', (req,res) => {
    res.json({
        message:'Hello World'
    })
})
app.use('/api-docs', express.static('./docs'))


//With middleware Check User Token
app.use('/user', middleware.checkTokenUser ,userController)

//No Middleware
app.use('/auth', auth)

app.use(middleware.formatrest)
app.use(middleware.notFound)
app.use(middleware.errorHandler)

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log('Listening on port : ' + port)
})
