/*
const person = require('./person');
console.log(person);
*/

/*
// include class Person
const Person = require('./person');
// initialize obj person01 from Person class
const person01 = new Person('chuong nguyen', 36);
// call greeting method
person01.greeting();
*/

const Logger = require('./logger');

const logger = new Logger();

// chuẩn bị listenner 
logger.on('message' , (data) => {
    // chú ý: data lúc này là 1 obj bao gồm uuid và message truyền vào
    console.log('Called Listenner', data);
});

// gọi method log trong class Logger
logger.log('Hello World');
logger.log('Hi');
logger.log('Hello');