
const jwt = require('jsonwebtoken');

function checkIsAdmin(req, res, next){
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(" ")[1];

    try {
        if(!token){
            const error = new Error("Acesso negado");
            error.statusCode = 401;
            throw error;
        }
        
        const secret = process.env.SECRET;

        const decoded = jwt.verify(token, secret, (err, decoded)=>{
            if(err){
                const error = new Error("Token inválido");
                error.statusCode = 401;
                throw error;
            }else{
                return decoded;
            }
        });

        if(!decoded.isAdmin){
            const error = new Error("Acesso negado: você não é um administrador");
            error.statusCode = 403; 
            throw error;
        }

        next();

    } catch (error) {
        res.status(error.statusCode || 500).json({
            error: error.message, 
        });
    }
}

module.exports = checkIsAdmin;