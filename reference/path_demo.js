// include Path module of nodejs
const path = require('path');

//console.log(__filename);
// Base file name
console.log(path.basename(__filename));

// Directory name
console.log(path.dirname(__filename));

// file extension
console.log(path.extname(__filename));      // return .js

// create path object , and becausse it is obj so we can use .root or .dir or .base to get detail of it
console.log(path.parse(__filename));
console.log(path.parse(__filename).base);   // return path_demo.js

// concatenate paths. Ex return file test/hello.html in current folder
console.log(path.join(__dirname, 'test', 'hello.html'));


