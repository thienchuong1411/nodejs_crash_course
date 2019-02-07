const EventEmitter = require('events');
const uuid = require('uuid');

// khởi tạo class Logger kế thừa từ class EventEmitter
class Logger extends EventEmitter {
    // method log
    log(msg) {
        // call event
        this.emit('message', {id: uuid.v4(), msg});
    }
}

module.exports = Logger;