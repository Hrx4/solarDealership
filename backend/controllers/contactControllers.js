const { json } = require('body-parser');
const Contact = require('../models/contactModel')
const asyncHandler = require('express-async-handler');
const { v4: uuidv4 } = require('uuid');


const createContact = asyncHandler(async(req , res) => {
    const {name , email , phoneNumber , message} = req.body;
    if(!name || !email || !phoneNumber){
        res.status(400)
        throw new Error("All fields are mandatory")
    }
    const contact = await Contact.create({
        name, email, phoneNumber,message
    })
    res.send.status(200).json(contact);

})


const getContact = asyncHandler(async(req , res) => {
    const contacts = await Contact.find()
    console.log(contacts)
    res.json(contacts);
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


const updateContact = asyncHandler(async(req , res) => {

    const {name , email , phoneNumber , message} = req.body

    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found")
    }

    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        {
            name:name,
            email:email,
            phoneNumber:phoneNumber ,
            message:message,
        }
    )

    res.status(201).json(contact);
})


module.exports = {createContact , getContact , deleteConatct , updateContact}