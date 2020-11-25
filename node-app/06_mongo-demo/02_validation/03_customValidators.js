const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log('Couldnot connect to MongoDB', err))

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255
    },
    category: {
        type: String,
        required: true,
        enum: ['web', 'mobile', 'network']
    },
    author: String,
    tags: {
        type: Array,
        // Custom Validator
        validate: {
            validator: function (v) {
                return v && v.length > 0
            },
            message: "A Course Should have atleast one tag"
        }
    },
    date: { type: Date, default: Date.now },
    isPublished: Boolean,
    price: {
        type: Number,
        required: function () { return this.isPublished },
        min: 10,
        max: 200
    }
})

const Course = mongoose.model('Course', courseSchema)

async function createCourse() {
    const course = new Course({
        name: 'React Course',
        category: 'web',
        author: 'Arjun',
        tags: null,
        isPublished: true,
        price: 10
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