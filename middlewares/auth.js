const jwt = require('jsonwebtoken');

const verifyAdmin = async (req, res, next) => {
    try {
        const {token} = req.body
        const decoded = await jwt.verify(token, process.env.JWT_SECRET)

        next();
    } catch(err){
        res.status(400).json({
            status: "error",
            message: "error verifying admin",
            details: err.message
        })
    }
}



module.exports = {
    verifyAdmin
}