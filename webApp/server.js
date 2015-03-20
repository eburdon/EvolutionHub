// SERVER FILE - EXAMPLE FROM MEANMACHINE

// var config = require('./config');
var express = require('express');
var app		= express();
var path 	= require('path');

// Set public folder to serve public assets; will START to look here for JS, CSS, ETC. files...
// app.use(express.static(__dirname + '/public/app'));
app.use(express.static(__dirname + '/public'));

// Set up initialization page / primary route [to the index.html file]
// gets ANY request to load the page...
app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname + '/public/app/views/index.html'))
});

// Start server on port 8080
app.listen(8080);
console.log('Magic happens on port 8080');