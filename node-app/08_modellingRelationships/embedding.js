const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

const authorSchema = new mongoose.Schema({
  name: String,
  bio: String,
  website: String
});

const Author = mongoose.model('Author', authorSchema);

const Course = mongoose.model('Course', new mongoose.Schema({
  name: String,
  author: {
    type: authorSchema,
    required: true
  }
}));

async function createCourse(name, author) {
  const course = new Course({
    name,
    author
  });

  const result = await course.save();
  console.log(result);
}

async function listCourses() {
  const courses = await Course.find();
  console.log(courses);
}

async function updateAuthor(courseId) {
  const course = await Course.update({ _id: courseId }, {
    $unset: {
      'author': ''
    }
  })
}

updateAuthor('5fbf5d4685eb8a2a3f20f0a0')





// async function addAuthor(courseId, author) {
//   const course = await Course.findById(courseId);
//   course.authors.push(author);
//   console.log(await course.save());
// }

// async function removeAuthor(courseId, authorId) {
//   const course = await Course.findById(courseId);
//   var theAuthor = course.authors.id(authorId);
//   theAuthor.remove();
//   console.log(await course.save());
// }

// removeAuthor('5b8d9c752af5cb7130206e55', '5b8d9d3412a2833fc45382d2');
// addAuthor('5b8d9c752af5cb7130206e55', new Author({ name: 'Amy' }))
/* createCourse('Node Course', [
  new Author({ name: 'Mosh' }),
  new Author({ name: 'Josh' })
]); */
// updateCourse('5b8d857af88923ade835645c');
