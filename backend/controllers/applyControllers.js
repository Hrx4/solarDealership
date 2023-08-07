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

const deleteApply = asyncHandler(async(req , res) => {
    const apply = await applyModels.findById(req.params.id);
    console.log(req.params.id)
    if(!apply){
        res.status(404);
        throw new Error("Contact not found")
    }

    await applyModels.findOneAndDelete(
        req.params.id
    )
    res.status(200).json(apply);
})


const updateApply = asyncHandler(async(req , res) => {

    const {fullName , email , phoneNumber , dealership , priceRange , state , city} = req.body

    const apply = await applyModels.findById(req.params.id);
    if(!apply){
        res.status(404);
        throw new Error("Contact not found")
    }

    const updatedApply = await applyModels.findByIdAndUpdate(
        req.params.id,
        {
            fullName: fullName,
        phoneNumber: phoneNumber,
        email: email,
        dealership: dealership,
        priceRange: priceRange,
        state: state,
        city: city,
        }
    )

    res.status(201).json(apply);
})



module.exports = {createApply , getApply , deleteApply , updateApply}