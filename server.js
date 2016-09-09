var express = require('express');
var app = express();
var path = require('path');

// http://stackoverflow.com/questions/10434001/static-files-with-express-js

app.use(express.static(path.join(__dirname, 'site')));

app.listen(8000);
console.log('Listening on port localhost:8000');
