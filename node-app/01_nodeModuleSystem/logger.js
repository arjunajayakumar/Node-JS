const EventEmitter = require('events')

var url = 'http://mylogger.io/log'

class Logger extends EventEmitter {
    log(message) {
        // send an HTTP request
        console.log(message)

        // Raise an event
        this.emit('MessageLogged', { id: 5, URL: 'http://shshshs' })
    }
}

module.exports = Logger;

