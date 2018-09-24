/* jshint node: true */
'use strict';
// A command line to load a endpoint defintion and listen->recieve instrructions->execute->callback REST url.

var SEPARATOR = '==========================================';

var utils = require('./utils');
var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// helps get data from a POST.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var router = app.Router();

// Dump arguments...disable later.
utils.iterate(process.argv, null, function (nullCtx, arg, i) {
  console.log(i + ':' + arg);
});

console.log(SEPARATOR);

var jsondefFile = process.argv[2];

var defObj = JSON.parse(fs.readFileSync(jsondefFile, 'utf8'));
//var defObj = require(jsondefFile);



console.log(defObj);

router.get('/', function(req,res) {
  res.json({ message: 'hooray! welcome to our api!' });
});

var url = '/' + defObj.url;

router.get(url, function(req, res) {
  
});

app.use(router);

app.listen(8000);
// build URL and register REST endpoitn listneing...
// write other script to talk to rest endpoint.
