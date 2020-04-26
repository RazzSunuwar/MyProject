const http = require('http');
const server = http.createServer(function(req, res){
    consloe.log("Client connected to http server", req.url)
    res.write('Hello World');
    res.end();
});
server.listen(5050, function(err, done){
    if(err) {
        console.log("Server listening failed", err);
    } else {
        console.log("Server listening on port 5050");
        console.log("Press Ctrl + C to exit");
    }
})