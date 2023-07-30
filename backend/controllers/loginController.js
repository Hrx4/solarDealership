const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken')

const login = asyncHandler(async(req , res) => {
    const {userName , password} = req.body;
    if(!userName || !password){
        res.status(400)
        throw new Error("All fields are mandatory")
    }

    if(userName!=process.env.USERNAME_SECRET || password!=process.env.PASSWORD_SECRET ){
        res.status(400).json("Email or Password Doesnot Match")
    }

    const jsonToken = jwt.sign(
{        userName:userName, password:password
}    , process.env.JWT_SECRET)

     res.json({message: "Hi , welcome admin" ,token: jsonToken}).cookie("token" , jsonToken);

})

module.exports = {login}
