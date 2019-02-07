const EventEmitter = require('events');

// initialized class MyEmitter inherit from EventEmitter
class MyEmitter extends EventEmitter{}

const myEmitter = new MyEmitter();

// chuẩn bị listenner
myEmitter.on('event', () => {
    console.log('an event occured!');
});

// gọi 2 event
myEmitter.emit('event');
myEmitter.emit('event');