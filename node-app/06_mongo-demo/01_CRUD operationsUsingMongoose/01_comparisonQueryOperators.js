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

// eq (equal)
// ne not equal
// gt (greater than)
// gte greater than or equal to
// lt (less than)
// lte (less than or equal to)
// in
// nin (not in) 

// async function getCourses() {
//     const courses = await Course
//         // .find({ author: 'Arjun', isPublished: true })
//         // .find({price:{$gt:10, $lte:20}}) to find price between 10 and 20$
//         // .find({ price: { $in: [10, 15, 20] } })
//         .limit(10)
//         .sort({ name: 1 })
//         .select({ name: 1, tags: 1 })
//     console.log(courses)
// }

// getCourses()

async function updateCourse(id) {
    const course = await Course.findById(id)

    if (!course) return;

    console.log(course)
    // course.isPublished = true;
    // course.author = 'Arjun';

    // const result = await course.save();
    // console.log(result)

}

updateCourse('5fbbcac4bfae92a026a2e077')