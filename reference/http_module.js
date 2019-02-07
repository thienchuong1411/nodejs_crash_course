const http = require('http');

// Create server obj
http.createServer((req, res) => {
    // write response 
    res.write('Hello World');
    res.end();
}).listen(5000, console.log('Server running on port 5000...'));