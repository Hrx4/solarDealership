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




const getCustomerList = asyncHandler(async(req , res) => {
    const customers = await customerModel.find()
    console.log(customers)
    res.json(customers);
})


const updateCustomer = asyncHandler(async(req , res) => {

    const {name , registrationNo , password , email , mobileNo , so , aadharNo, panNo, accountNo, ifscCode,  distName, landMark, address, registrationPay} = req.body

    const customer = await customerModel.findById(req.params.id);
    if(!customer){
        res.status(404);
        throw new Error("Contact not found")
    }

    const updatedCustomer = await customerModel.findByIdAndUpdate(
        req.params.id,
        {
            name : name,
           registrationNo :registrationNo,
           password :password,
           email :email,
           mobileNo :mobileNo,
           so :so,
           aadharNo:aadharNo,
           panNo:panNo,
           accountNo:accountNo,
           ifscCode:ifscCode,
           distName:distName ,
           landMark:landMark,
           address:address,
           registrationPay:registrationPay,
        }
    )

    res.status(201).json(customer);
})

const deleteCustomer = asyncHandler(async(req , res) => {
    const customer = await customerModel.findById(req.params.id);
    console.log(req.params.id)
    if(!customer){
        res.status(404);
        throw new Error("Contact not found")
    }

    await customerModel.findOneAndDelete(
        req.params.id
    )
    res.status(200).json(customer);
})



module.exports = {createCustomer , getCustomer , getCustomerList , updateCustomer , deleteCustomer}