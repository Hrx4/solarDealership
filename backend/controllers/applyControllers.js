const applyModels = require('../models/applyModels');
const asyncHandler = require('express-async-handler');

const createApply = asyncHandler(async(req , res) => {
    const {fullName , email , phoneNumber , dealership , priceRange , state , city} = req.body;
    if(!fullName || !email || !phoneNumber){
        res.status(400)
        throw new Error("All fields are mandatory")
    }
    const apply = await applyModels.create({
        fullName , email , phoneNumber , dealership , priceRange , state , city
    })
    res.status(200).json(apply);

})


const getApply = asyncHandler(async(req , res) => {
    const applies = await applyModels.find()
    res.status(200).json(applies);
})


module.exports = {createApply , getApply}