const asyncHandler = require('express-async-handler');
const customerModel = require('../models/customerModel');
const jwt = require('jsonwebtoken')


const createCustomer = asyncHandler(async(req , res) => {
    const {name , registrationNo , email , mobileNo , so , aadharNo, panNo, accountNo, ifscCode, photo, distName, landMark, address,state , dob ,registrationPay , approved} = req.body;
    // if(!name  || !registrationNo  || !email  || !mobileNo  || !so  || !aadharNo || !panNo || !accountNo || !ifscCode || !photo || !distName || !landMark || !address || !registrationPay){
    //     res.status(400)
    //     throw new Error("All fields are mandatory")
    // }
    // if(photo===""){photo= "https://cdn.icon-icons.com/icons2/2506/PNG/512/user_icon_150670.png"}
    const customer = await customerModel.create({
        name , registrationNo , email , mobileNo , so , aadharNo, panNo, accountNo, ifscCode, photo, distName, landMark, address,  state, dob,registrationPay , approved
    })
    res.status(200).json(customer);

})


const getCustomer = asyncHandler(async(req , res) => {
    const {registrationNo } = req.body;
    const getcustomer = await customerModel.findOne(
        {registrationNo : registrationNo}
    )
    if(getcustomer ) 
    {
        const jsonToken = jwt.sign(
            {        registrationNo:registrationNo
            }    , process.env.JWT_SECRET)
        res.status(200).json({data:getcustomer , token:jsonToken}) 
    }
    else{
    res.status(401);
        throw new Error("Invalid Registration Number");
    }

})




const getCustomerList = asyncHandler(async(req , res) => {
    const customers = await customerModel.find()
    console.log(customers)
    res.json(customers);
})


const updateCustomer = asyncHandler(async(req , res) => {

    const {name , registrationNo , email , mobileNo , so , aadharNo, panNo, accountNo, ifscCode,photo,  distName, landMark, address,state , dob, registrationPay , approved} = req.body

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
           email :email,
           mobileNo :mobileNo,
           so :so,
           aadharNo:aadharNo,
           panNo:panNo,
           accountNo:accountNo,
           ifscCode:ifscCode,
           photo:photo,
           distName:distName ,
           landMark:landMark,
           address:address,
           state:state,
           dob:dob,
           registrationPay:registrationPay,
           approved:approved
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