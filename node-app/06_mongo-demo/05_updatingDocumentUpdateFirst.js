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
    // const result = await Course.update({ _id: id }, {
    //     $set: {
    //         author: 'Arjun',
    //         isPublished: false
    //     }
    // })

    // console.log(result)

    const course = await Course.findByIdAndUpdate(id, {
        $set: {
            author: 'Arju',
            isPublished: true
        }
    }, { new: true })

    console.log(course)

}

updateCourse('5fbbcac4bfae92a026a2e077')