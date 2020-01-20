const http = require('http');

const server = http.createServer((req, res) => {
    console.log('Client connected to server...');
    console.log('Request', req.url);

    res.write('Welcome to Node.js');
    res.end();
});
server.listen(3000, (err, done) => {
    if(err) {
        console.log('Server listen failed');
    } else {
        console.log('Server stated on port 3000...');
        console.log('Press CTRL + C to exit');
    }
});

