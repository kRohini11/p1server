

const jwt = require('jsonwebtoken')

function validateToken(req, res, next) {

    try {
        const token = req.headers.authorization
        if (token) {
            jwt.verify(token, "myToken", function (e,s) {
                if (s) {
                    next()
                }
                else {
                    res.send("Invalid token")
                }
            })

        }
        else {
            res.send("token missing")
        }
    }
    catch (e) {
        console.error("validateToken", e)
    }

    
}



module.exports = validateToken