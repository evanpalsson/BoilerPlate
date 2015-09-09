var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname + '/public'));

app.listen(8005)
console.log("server working on port 8005")