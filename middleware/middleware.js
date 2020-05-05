

const notFound = (req,res,next) => {
    res.status(404)
    const error = new Error('Not Found - ' + req.originalUrl);
    next(error)
} 

const errorHandler = (error,req,res,next) => {
    res.status(res.statusCode || 500)
    console.log(res.statusCode)
    res.json({
        message: error.message,
        stack: error.stack
    })
}

module.exports = {
    notFound,
    errorHandler
}