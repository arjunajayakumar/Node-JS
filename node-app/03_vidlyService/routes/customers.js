const mongoose = require('mongoose')
const Joi = require('joi')
const express = require('express')
const router = express.Router()

const Customer = mongoose.model('Customer', new mongoose.Schema({
    isGold: Boolean,
    name: String,
    phone: {
        type: Number,
        required: true,
        min: 10
    }
}))

router.get('/', async (req, res) => {
    const customers = await Customer.find().sort('name')
    res.send(customers)
})

router.post('/', async (req, res) => {
    const { error } = validateCustomer(req.body)
    if (error) return res.send(error.details[0].message)

    let customer = new Customer({
        isGold: req.body.isGold,
        name: req.body.name,
        phone: req.body.phone

    })

    customer = await customer.save()
    res.send(customer)

})

router.put('/:id', async (req, res) => {
    const { error } = validateCustomer(req.body)
    if (error) return res.send(error.details[0].message)

    const customer = await Customer.findByIdAndUpdate(req.params.id, { isGold: req.body.isGold, name: req.body.name, phone: req.body.phone }, { new: true })

    if (!customer) res.status(404).send('Customer for the given id was not found')

    res.send(customer)
})

router.delete('/:id', async (req, res) => {
    const customer = await Customer.findByIdAndRemove(req.params.id)

    if (!customer) res.status(404).send('Customer for the given id was not found')

    res.send(customer)
})

router.get('/:id', async (req, res) => {
    const customer = await Customer.findById(req.params.id)

    if (!customer) res.status(404).send('Customer for the given id was not found')

    res.send(customer)

})


function validateCustomer(customer) {
    const schema = {
        isGold: Joi.bool().required(),
        name: Joi.string().min(3).required(),
        phone: Joi.number().min(10).required()
    }

    return Joi.validate(customer, schema)

}

module.exports = router