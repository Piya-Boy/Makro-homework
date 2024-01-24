const errorHandler = (err, req, res, next) => {
    // if(err.name ==="TokenExpiredError") {
    //     return res.status(401).json({message: "token expired"})
    // }
    // if(err.name ==="JsonWebTokenError") {
    //     return res.status(401).json({message: "invalid token"})
    // }

    res.status(err.statusCode || 500).json({message: err.message || "internal server error"})
    
}

module.exports = errorHandler