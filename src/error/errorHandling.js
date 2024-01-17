function errorHandling(err, req, res, next){
    res.stautus(500).json({message: err.message})
}

module.exports = errorHandling; 
