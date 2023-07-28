const mongoose = require('mongoose')

const applySchema = mongoose.Schema({
    
    fullName: {
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
    dealership: {
        type: String,
        required: [true, "Please add dealership"],
    },
    priceRange: {
        type: String,
        required: [true, "Please add pricerange"],
    },
    state: {
        type: String,
        required: [true, "Please add state"],
    },
    city: {
        type: String,
        required: [true, "Please add city"],
    },
    
}, {
    timestamps: true,
}
);

module.exports = mongoose.model("apply" , applySchema)