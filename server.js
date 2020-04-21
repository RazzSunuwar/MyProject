const http = require('http');
const fs = require('fs');
const { parse } = require("querystring");

const server = http.createServer( (req, res) => {
    if(req.method === 'POST'){
        collectionRequestData(req, result => {
            console.log(result);
            res.end(`Parsed data belonging to ${result.fname}`)
        })
    }
    res.end(
        `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>About</title>
        </head>
        <body>
            <form action="/" method="post">
                Name: <br>
                <input type="text" placeholder="Full Name" name="fname">
                <br>
                Email: <br>
                <input type="text" placeholder="example@gmail.com" name="email">
                <br>
                Phone: <br>
                <input type="text" placeholder="9801234567" name="number">
                <br> <br>
                <button>Submit</button>
            </form>
        </body>
        </html>`
   
    );
});

server.listen(3000, (err, done) => {
    if(err){
        console.log('Error in server connection...');
    } else{
        console.log('Server connection successful...');
        console.log('Click CTRL + C to exit from server');
    }
});

function collectionRequestData(request, callback){
    const FORM_URLENCODED = 'application/x-www-form-urlencoded';
    if(request.headers['content-type'] === FORM_URLENCODED){
        let body = '';
        request.on('data', chunk =>{
            body += chunk.toString();   //Convert Buffer to string 
        });

        request.on('end', () => {

            // let str = parse(body);
            // str = JSON.stringify(str);
            // fs.writeFile('data.JSON', str, (err) => {
            //     if(err){
            //         console.log(err);
            //     } 
            //     console.log('Success');  
            // });

            let obj = {
                id:[]
            };
            obj.id.push(body);
            let json =JSON.stringify(obj);
            fs.writeFile('data.JSON', json, 'utf8', (err) =>{
                if(err){
                    console.log('Error')
                }
                console.log('Success');
            fs.readFile('data.JSON', 'utf8', function readFileCallback(err, datas){
                if(err){
                    console.log(err)
                } else {
                    obj.JSON.parse(datas);
                    obj.table.push(body);
                    json = JSON.stringify(obj);
                    fs.writeFile('data.JSON', json, 'utf8', (err) =>{
                        if(err){
                            console.log('Error')
                        }
                        console.log('success')
                    })

                }
                })
            })
        })

    }else{
        callback(null);
    }
}
 