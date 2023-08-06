const asyncHandler = require('express-async-handler');
const customerModel = require('../models/customerModel');
const jwt = require('jsonwebtoken')


const createCustomer = asyncHandler(async(req , res) => {
    const {name , registrationNo , password , email , mobileNo , so , aadharNo, panNo, accountNo, ifscCode, photo, distName, landMark, address, registrationPay} = req.body;
    // if(!name  || !registrationNo  || !password  || !email  || !mobileNo  || !so  || !aadharNo || !panNo || !accountNo || !ifscCode || !photo || !distName || !landMark || !address || !registrationPay){
    //     res.status(400)
    //     throw new Error("All fields are mandatory")
    // }
    const customer = await customerModel.create({
        name , registrationNo , password , email , mobileNo , so , aadharNo, panNo, accountNo, ifscCode, photo, distName, landMark, address, registrationPay
    })
    res.status(200).json(customer);

})


const getCustomer = asyncHandler(async(req , res) => {
    const {registrationNo ,password} = req.body;
    const getcustomer = await customerModel.findOne(
        {registrationNo : registrationNo}
    )
    if(getcustomer && getcustomer.password === password ) 
    {
        const jsonToken = jwt.sign(
            {        registrationNo:registrationNo, password:password
            }    , process.env.JWT_SECRET)
        res.status(200).json({data:getcustomer , token:jsonToken}) 
    }
    else{
    res.status(401);
        throw new Error("Invalid Email or Password");
    }

})
module.exports = {createCustomer , getCustomer}