const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url);   // ghi nhận client request đến server như thế nào, ví dụ truy cập localhost:5000 thì nó là /
    // từ đó ta xét điều kiện để trả về
    if (req.url === '/') {
        // read file index.html to content and response it
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type':'text/html' } );
            res.end(content);
        });
    }

    if (req.url === '/about') {
        // read file index.html to content and response it
        fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type':'text/html' } );
            res.end(content);
        });
    }    

    // if (req.url === '/api/users') {
    //     const users = [
    //         { name: 'chuongnt', age: 36},
    //         { name: 'vinhle', age: 25},
    //         { name: 'phuocnguyen', age: 35},
    //         { name: 'viendang', age: 28}
    //     ];

    //     res.writeHead(200, { 'Content-Type':'application/json' });
    //     res.end(JSON.stringify(users));    // JSON.stringify convert javascript value to javascript object
    // }

    // Build file path
    // nếu client request / thì nó map index.html , nếu request /about.html thì req.url = about.html và map vào link
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);
    console.log(filePath);  // to test

});

const PORT = process.env.PORT || 5000;

server.listen(PORT, console.log(`Server running on port ${PORT}`));