const router = require('express').Router()
const swaggerui = require('swagger-ui-express')
const swaggerDocument = require('./swagger.json')
const swaggerJSDoc = require('swagger-jsdoc')


router.get('/api-docs', function (req,res,next) {
    swaggerDocument.host = req.get('host')
    req.swaggerDoc = swaggerDocument
    next()
}, swaggerui.serve, swaggerui.setup())

module.exports = router