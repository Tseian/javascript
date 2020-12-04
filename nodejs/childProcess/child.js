var http = require('http');
var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    console.log(req._handler)

    res.end('handled by child, pid is ' + process.pid + '\n');

});
process.on('message', function (m, _server) {
    if (m === 'server') {
        _server.on('connection', function (socket) {
            // console.log(_server)
            console.log(socket._handler = 1)
            server.emit('connection', socket);
        });
    }
});