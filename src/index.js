"use strict";
exports.__esModule = true;
var http = require("http");
var hostname = '127.0.0.1';
var port = process.env.PORT || 3001;
var server = http.createServer(function (req, res) {
    var headers = req.headers, method = req.method, url = req.url;
    switch (url) {
        case '/':
            if (method === 'GET') {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/plain');
                res.end('Hello, world!');
            }
            break;
        case '/test-post':
            var data_1 = '';
            if (method === 'POST') {
                req.on('data', function (chunk) { return data_1 += chunk; });
                req.on('end', function () {
                    console.log(data_1);
                });
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/plain');
                res.end('Thanks for the post request.');
            }
            break;
    }
    res.end();
});
server.listen(port, function () {
    console.log("Server listening on http://".concat(hostname, ":").concat(port));
});
