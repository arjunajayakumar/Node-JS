const mongoose = require('mongoose')
const Joi = require('joi')

const Customer = mongoose.model('Customer', new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    isGold: {
        type: Boolean,
        default: false
    },
    phone: {
        type: Number,
        required: true,
        minlength: 10,
        maxlength: 50
    }
}))

function validateCustomer(customer) {
    const schema = {
        name: Joi.string().min(3).required(),
        phone: Joi.number().min(10).required(),
        isGold: Joi.boolean().required()
    }

    return Joi.validate(customer, schema)

}

exports.Customer = Customer;
exports.validate = validateCustomer;