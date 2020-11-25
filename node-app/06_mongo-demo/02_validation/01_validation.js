const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log('Couldnot connect to MongoDB', err))

const courseSchema = new mongoose.Schema({
    name: { type: String, required: true },
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now },
    isPublished: Boolean
})

const Course = mongoose.model('Course', courseSchema)

async function createCourse() {
    const course = new Course({
        author: 'Arjun',
        tags: ['Angular', 'frontend'],
        isPublished: true
    })

    try {
        await course.validate()
        const result = await course.save()
        console.log(result)
    }
    catch (ex) {
        console.log(ex.message)
    }

}

createCourse()