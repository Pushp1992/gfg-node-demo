const http = require('http');

const hostname = "127.0.0.1";

const port = 7000;

// create http server
const server = http.createServer((req, res)=> {
    // setting res http header
    res.writeHead(200, {
        "Content-type": "text/plain"
    });

    res.end('hello there, how are you??');
});


server.listen(port, hostname, () =>{
    console.log(`server is running at http://${hostname}:${port}/`)
});
