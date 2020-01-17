var fileOperation = require('./file');

fileOperation.write('filename', 'content', (err, done) => {
    if(err){
        console.log('Error in creating new file', err);
    } else {
        console.log('Success in creating new file', done);
    }
});

fileOperation.read('filename', (err, done) => {
    if(err){
        console.log('Error in reading file', err);
    } else {
        console.log('Success in reading new file', done);
    }
});