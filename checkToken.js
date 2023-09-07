
const jwt = require('jsonwebtoken');

function checkToken(req, res, next){
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(" ")[1];

    try {
        if(!token){
            const error = new Error("Acesso negado");
            error.statusCode = 401;
            throw error;
        }
        
        const secret = process.env.SECRET;

        jwt.verify(token, secret);

        next();

    } catch (error) {
        res.status(error.statusCode || 500).json({
            error: error.message, 
        });
    }
}

module.exports = checkToken;