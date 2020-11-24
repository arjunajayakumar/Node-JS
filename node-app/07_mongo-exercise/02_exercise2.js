const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/mongo-exercises')
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.log('Couldnt connect to DB', error))

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now },
    isPublished: Boolean,
    price: Number
})

const Course = mongoose.model('Course', courseSchema)


async function getCourses() {
    return await Course
        .find({ isPublished: true })
        .or([{ tags: 'frontend' }, { tags: 'backend' }])
        .sort({ price: -1 })
        .select('name author price')
}

async function run() {
    const courses = await getCourses()
    console.log(courses)
}

run()