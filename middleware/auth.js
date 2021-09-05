const jwt = require('jsonwebtoken')
const config = require('config')

// USE IT TO PROTECT ROUTS
// todo: why not () => {}
// todo: where this is useed? what is header??
module.exports = function (req, res, next) {
    // get token header
    const token = req.header('x-auth-token');
    // Check if exists
    if (!token) return res.status(401).json({msg: 'No token authorisation denied'})
    try{
        const decoded = jwt.verify(token, config.get('jwtSecret'))
        req.user = decoded.user;
        // todo why call next?
        next();
    } catch (err){
        res.status(401).json({msg: 'Token not valid'})
    }
}