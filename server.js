var express = require('express');
var app = express();
var path = require('path');
var port = Number(process.env.PORT || 8005)

app.use(express.static(__dirname + '/public'));

app.listen(8005)
console.log("server working on port 8005")