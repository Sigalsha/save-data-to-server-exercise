var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));  
app.use(bodyParser.json());

app.use(express.static('public'));
app.use(express.static(__dirname + '/node_modules'));

app.post('/file', function(req, res){
    console.log(req.body);
    fs.writeFile("userInput.txt", JSON.stringify(req.body), function (err){
        if (err) throw err;
        else {
            console.log(req.body);
            res.send('thank you for writing ' + JSON.stringify(req.body));
        }
    });
});

// app.get('/file', function(req, res){
//     fs.readFile('userInput.txt', 'utf8', function(err, data) {
//         if (err) throw err;
//         else {
//             console.log(data);
//             res.send(data);
//         }
//     });
    
// });

app.listen(3000,()=> {
    console.log('hey, it is your server');
});