const mongoose = require('mongoose')
const { genreSchema } = require('./genre')
const Joi = require('joi')

const Movie = mongoose.model('Movie', new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 50
    },
    genre: {
        type: genreSchema,
        required: true
    },
    numberInStock: {
        type: Number,
        required: true,
        min: 0,
        max: 255
    },
    dailyRentalRate: {
        type: Number,
        required: true,
        min: 0,
        max: 255
    }

}))

// const Movie = mongoose.model('Movies', new mongoose.Schema({
//     title: {
//         type: String,
//         required: true,
//         trim: true,
//         minlength: 5,
//         maxlength: 255
//     },
//     genre: {
//         type: genreSchema,
//         required: true
//     },
//     numberInStock: {
//         type: Number,
//         required: true,
//         min: 0,
//         max: 255
//     },
//     dailyRentalRate: {
//         type: Number,
//         required: true,
//         min: 0,
//         max: 255
//     }
// }));

function validateMovies(movie) {
    const schema = {
        title: Joi.string().min(4).max(55).required(),
        genreId: Joi.string().required(),
        numberInStock: Joi.number().min(0).required(),
        dailyRentalRate: Joi.number().min(0).required()
    }

    return Joi.validate(movie, schema)
}

module.exports.Movie = Movie
module.exports.validate = validateMovies
