const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/playground')
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log('Couldnot connect to MongoDB', err))

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now },
    isPublished: Boolean
})

const Course = mongoose.model('Course', courseSchema)

async function createCourse() {
    const course = new Course({
        name: 'Angular course',
        author: 'Arjun',
        tags: ['Angular', 'frontend'],
        isPublished: true
    })

    const result = await course.save()
    console.log(result)

}

// or
// and

async function getCourses() {
    const courses = await Course
        // .find({ author: 'Arjun', isPublished: true })
        .find()
        .or([{ author: 'Mosh' }, { isPublished: true }])
        .and([])
        .limit(10)
        .sort({ name: 1 })
        .select({ name: 1, tags: 1 })
    console.log(courses)
}

getCourses()