const http = require('http');
const port = 5050;
const server = http.createServer(function(request, response){
    // console.log("Client connected to http server", request.url) //Client connected to http server /home
    response.write('Hello World');
    response.end();
});
server.listen(port, function(err, done){
    if(err) {
        console.log("Server listening failed", err);
    } else {
        console.log(`Server listening on port ${port}`);
        console.log("Press Ctrl + C to exit");
    }
})