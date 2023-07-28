const mongoose = require('mongoose')

const contactSchema = mongoose.Schema({
    user_id:{
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: [true, "Please add the contact name"],
    },
    email: {
        type: String,
        required: [true, "Please add the contact email"],
    },
    phoneNumber: {
        type: String,
        required: [true, "Please add the contact phone number"],
    },
    message: {
        type: String,
    },
}, {
    timestamps: true,
}
);

module.exports = mongoose.model("contact" , contactSchema)