const http = require("http");
const server = new http.createServer(function (req, res) {
    res.end();
});
server.on('clientError', (request, socket, head) => {
    socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});

server.on('connect', () => {
    console.log("connect");
});

server.on('connection', (socket) => {
    console.log("connection");
});


server.on('request', (request, response) => {
    console.log("request");
});

server.on('upgrade', (request, socket, head) => {
    console.log("upgrade");
});

server.listen(8000);