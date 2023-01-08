const { verifyToken } = require('../helpers/jwt');
const User = require('../models/userModel');

const authentication = async (req,res,next) => {
    try {
        // const token = req.cookie.token;
        const token = req.get("token");
        const userDecoded = verifyToken(token);

        const users = new User();
        const user = users.allUsers().find(item => item.id == userDecoded.id);

        if(!token) {
            return res.status(401).end();
        }

        if(!user) {
            return res.status(401).json({
                name: "Authentication Error",
                message: "Error Authentication"
              })
        }

        next();

        
    } catch(err) {
        return res.status(401).json(err);
    }
};

module.exports = authentication;