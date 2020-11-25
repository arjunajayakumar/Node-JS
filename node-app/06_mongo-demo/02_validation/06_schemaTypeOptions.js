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
        enum: ['web', 'mobile', 'network'],
        lowercase: true,
        // uppercase:true,
        trim: true
    },
    author: String,
    tags: {
        type: Array,
        // async Validator
        validate: {
            isAsync: true,
            validator: function (v, callback) {
                setTimeout(() => {
                    const result = v && v.length > 0;
                    callback(result)
                }, 1000)
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
        max: 200,
        get: v => Math.round(v),
        set: v => Math.round(v)
    }
})

const Course = mongoose.model('Course', courseSchema)

async function getCourses() {
    const pageNumber = 2;
    const pageSize = 2

    const courses = await Course
        .find({ _id: '5fbe0d197955484935070b00' })
        // .skip((pageNumber - 1) * pageSize)
        // .limit(10)
        .sort({ name: 1 })
        .select({ name: 1, tags: 1, price: 1 })
    console.log(courses[0].price)
}


async function createCourse() {
    const course = new Course({
        name: 'Vue Course',
        category: 'web',
        author: 'Armaan',
        tags: ['frontend'],
        isPublished: true,
        price: 10.87
    })

    try {
        await course.validate()
        const result = await course.save()
        console.log(result)
    }
    catch (ex) {
        for (field in ex.errors)
            console.log(ex.errors[field].message)
    }

}

getCourses()