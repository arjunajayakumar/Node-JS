const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/playground')
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log('Couldnot connect to MongoDB', err))

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: Date,
    isPublished: Boolean,
    price: Number
})

const Course = mongoose.model('Course', courseSchema)


async function removeCourse(id) {
    const result = await Course.deleteOne({ _id: id })
    console.log(result)


}

removeCourse('5fbbcac4bfae92a026a2e077')