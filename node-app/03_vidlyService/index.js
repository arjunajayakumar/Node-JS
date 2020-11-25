const express = require('express')
const mongoose = require('mongoose')
const app = express()
const genres = require('./routes/genres')
const customers = require('./routes/customers')

mongoose.connect('mongodb://localhost/vidly')
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.log('Couldnot connect to mongoDB', error))

app.use(express.json())
app.use('/api/genres', genres)
app.use('/api/customers', customers)

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`))