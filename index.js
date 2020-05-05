const express = require('express')
const middleware = require('./middleware/middleware')
const volleyball = require('volleyball')
const bodyparser = require('body-parser')
const swagger = require('./swagger/index')

require('./config/db')

//Controller Import
const auth = require('./controller/authController')

//Initialize Application
const app = express()

//HTTP Request Logging
app.use(volleyball)

//Parser Body Json
app.use(bodyparser.json())


app.get('/', (req,res) => {
    res.json({
        message:'Hello World'
    })
})
app.use('/api-docs', express.static('./docs'))

app.use('/auth', auth)

app.use(middleware.notFound)
app.use(middleware.errorHandler)

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log('Listening on port : ' + port)
})
