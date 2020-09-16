var express = require('express');
var app = express();
var morgan = require('morgan');

app.use(morgan('dev'));

app.get('*', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(7000, function(){
    console.log('Listening on port 7000');
}); 

/*const express = require('express');

const app = express();

app.get('/', (req, res) => {
    //res.send('<h1> H3llo</h1>');
});

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => console.log('server port 7000')); */

/*var express = require('express');

var app = express();

app.length('*', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(7000, function(){
    console.log('Listening on port 7000');
});*/

/*const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => console.log('server port 7000')); */


