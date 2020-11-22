const startupDebugger = require('debug')('app:startup')
const dbDebugger = require('debug')('app:db')
const config = require('config')
const morgan = require('morgan')
const helmet = require('helmet')
const logger = require('./middleware/logger')
const courses = require('./routes/courses')
const home = require('./routes/home')
const express = require('express')
const app = express()
app.engine('pug', require('pug').__express)

app.set('view engine', 'pug')
app.set('views', './views')

app.use(express.json())

app.use(logger)

// Buildin middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.use('/api/courses', courses)
app.use('/', home)

// Third party middlewares
app.use(helmet())
// app.use(morgan('tiny'))

// Developement Enviornment
// console.log(`NODE_ENV: ${process.env.NODE_ENV}`)
// console.log(`app:${app.get('env')}`)

if (app.get('env') === 'development') {
    app.use(morgan('tiny'))
    startupDebugger('Morgan enabled....')
}

// NODE_ENV=production,development,testing - SETTING ENV VARIABLE FOR CONFIG
// DEBUG=app:startup, app:db - setting env variable for debug module
// DEBUG=app:* - for all
// DEBUG=app:startpup nodemon app.js - while starting the app

// DB work
dbDebugger('Connected to the database')
// Configuration
console.log('Application Name: ' + config.get('name'))
console.log('Mail server: ' + config.get('mail.host'))
console.log('Mail Password: ' + config.get('mail.password'))


const port = process.env.PORT || 3300;
app.listen(port, () => console.log(`Listening on Port ${port}`))

