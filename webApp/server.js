// SERVER FILE - EXAMPLE FROM MEANMACHINE

// var config = require('./config');
var express = require('express');
var app		= express();
var path 	= require('path');

// set public folder to serve public assets
// NODE WILL LOOK HERE FOR JS, CSS, ETC FILES
// app.use(express.static(__dirname + '/public/app'));
app.use(express.static(__dirname + '/public'));

// set up our (primary) route to the index.html file
app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname + '/public/app/views/index.html'))
});

// Start server on port 8080
app.listen(8080);
console.log('Magic happens on port 8080');