const Contact = require('../models/contactModel')
const asyncHandler = require('express-async-handler');
// const contactModel = require('../models/contactModel');
const { v4: uuidv4 } = require('uuid');


const createContact = asyncHandler(async(req , res) => {
    const {name , email , phoneNumber , message} = req.body;
    if(!name || !email || !phoneNumber){
        res.status(400)
        throw new Error("All fields are mandatory")
    }
    const contact = await Contact.create({
        name, email, phoneNumber,message, user_id : uuidv4()
    })
    res.status(200).json(contact);

})


const getContact = asyncHandler(async(req , res) => {
    const contacts = await Contact.find()
    res.status(200).json(contacts);
})


const deleteConatct = asyncHandler(async(req , res) => {
    const contact = await Contact.findById(req.params.id);
    console.log(req.params.id)
    if(!contact){
        res.status(404);
        throw new Error("Contact not found")
    }

    await Contact.findOneAndDelete(
        req.params.id
    )
    res.status(200).json(contact);
})

module.exports = {createContact , getContact , deleteConatct}