const url = require('url');

const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active');

// Serialized url
console.log(myUrl.href);    // return http://mywebsite.com:8000/hello.html?id=100&status=active
console.log(myUrl.toString());

// Host (root domain)
console.log(myUrl.host);    // return mywebsite.com:8000

// Hostname (does not get port)
console.log(myUrl.hostname);    // return mywebsite.com

// pathname
console.log(myUrl.pathname);    // return /hello.html

// Serialized query
console.log(myUrl.search);      // return ?id=100&status=active

// Params object
console.log(myUrl.searchParams);    // return URLSearchParams { 'id' => '100', 'status' => 'active' }

// Add param
myUrl.searchParams.append('abc', 123);
console.log(myUrl.searchParams);    // return URLSearchParams { 'id' => '100', 'status' => 'active', 'abc' => '123' }

// Loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name} : ${value}`));


