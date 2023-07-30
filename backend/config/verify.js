const jwt = require('jsonwebtoken')


const verify = (req , res , next) => {
    const token  = req.cookies.token;
    if(!token) {
        return res.json("token missing")
    }
    else{
        jwt.verify(token , process.env.JWT_SECRET , (err , decoded) =>{
            if(err) {
                return res.json("Error")
            }
        }
        )
        }
    }

    module.exports = {verify}