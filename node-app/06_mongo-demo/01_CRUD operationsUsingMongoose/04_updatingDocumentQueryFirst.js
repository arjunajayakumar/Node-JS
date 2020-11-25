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


async function updateCourse(id) {
    const course = await Course.findById(id)

    if (!course) return;

    course.isPublished = true;
    course.author = 'Arjun';

    const result = await course.save();
    console.log(result)

}

updateCourse('5fbbcac4bfae92a026a2e077')