const fs = require('fs');

// Create file
function write(filename, content, cb){
    fs.writeFile('filename', 'content', 'UTF-8', (err, done) => {
        if(err){
        cb(err);
        } else {
            cb(null, done);
        }
    });
};

// Read file
function read(filename, content, cb){
    fs.readFile('filename', 'UTF-8', (err, done) => {
        if(err){
            cb(err);
        } else {
            cb(null, done);
        }
    });
}

module.exports = {write, read}