const mongoose = require('mongoose')

const customerSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add the customer name"],
    },
    registrationNo: {
        type: String,
        required: [true, "Please add the customer registration no"],
    },
    password: {
        type: String,
        required: [true, "Please add the customer password"],
    },
    email: {
        type: String,
        required: [true],
    },
    mobileNo: {
        type: String,
        required: [true],
    },
    so: {
        type: String,
        required: [true],
    },
    aadharNo: {
        type: String,
        required: [true],
    },
    panNo: {
        type: String,
        required: [true],
    },
    accountNo: {
        type: String,
        required: [true],
    },
    ifscCode: {
        type: String,
        required: [true],
    },
    photo: {
        type: String,
    },
    distName: {
        type: String,
        required: [true],
    },
    landMark: {
        type: String,
        required: [true],
    },
    address: {
        type: String,
        required: [true],
    },
    registrationPay: {
        type: String,
        required: [true],
    },
   
}, {
    timestamps: true,
}
);

module.exports = mongoose.model("customer" , customerSchema)