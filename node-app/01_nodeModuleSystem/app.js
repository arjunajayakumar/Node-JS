// var log = require('./logger')

// console.log(log)

// log('message')

// Path Module
// const path = require('path')
// const pathObj = path.parse(__filename)
// console.log(pathObj)

// OS Module
// const os = require('os')
// const freeMemory = os.freemem()
// const totalMemory = os.totalmem()
// console.log(freeMemory)
// console.log(totalMemory)

// fileSystem Module
// const fs = require('fs')

// readFile Sync
// const dir = fs.readdirSync('./')
// console.log(dir)

// readFile Async
// fs.readdir('./', (err, file) => {
//     if (err) console.log('Error', err)
//     else console.log(file)
// })

// Event Module
const EventEmitter = require('events')

// Register a Listener
// emitter.on('messageLogged', (arg) => console.log('Listener Called', arg)


// Raise an event
// emitter.emit('messageLogged', { id: 1, URL: 'http://' })


const Logger = require('./logger')
const logger = new Logger()

logger.on('MessageLogged', (arg) => console.log('Listener Called', arg))
logger.log('message')
