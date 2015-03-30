// var config = require('./config');
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var api		= express();
var path 	= require('path');
var projectExe = require('./projectExecutor');
var projects = require('./projects.json');

api.use(cors());
api.use(bodyParser.json());
api.use(bodyParser.urlencoded({ extended: false }));
//api.use(express.methodOverride());
//api.use(api.router);
api.use(express.static(path.join(__dirname, "public")));
//api.use(express.errorHandler({ dumpExceptions: true, showStack: true }));

api.get('/', function(req, res) {
   res.send("hi");
});

api.get('/execute/:projectID', function(req, res, next) {
    var project = req.params.projectID;
    var projectInfo;
    var output = "";

    if(project === "2") {
        projectInfo = projects.devin;
        console.log("executing project:", projectInfo);
        projectExe.executeCommand(projectInfo.path, projectInfo.runcmd[0].command, projectInfo.runcmd[0].arguments)
            .then(function(output) {
                res.send({project: project, output: output});
            }, function failure(data) {
                res.send({project: project, output: data});
            });
    }
});

// Set public folder to serve public assets; will START to look here for JS, CSS, ETC. files...
//api.use(express.static(__dirname + '/public'));

// Set up initialization page / primary route [to the index.html file]
// gets ANY request to load the page...
//api.get('*', function(req, res) {
//    res.sendFile(path.join(__dirname + '/public/app/views/index.html'))
//});

// Start server on port 8080
api.listen(8081);
console.log('api Magic happens on port 8081');
