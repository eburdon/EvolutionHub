
var child = require('child_process');
var path = require('path');
var q = require('q');

function executeCommand(cwd, command, argumentArray, input) {
    var deferred = q.defer();
    var cmd = command;
    var args = argumentArray;
    var opts = {cwd: cwd};

    var projectOutput = "";
    var projectErr = "";

    var kinderProcess = child.spawn(cmd, args, opts);

    if(input) {
        console.log("writing input data to standard input");
        kinderProcess.stdin.write(input);
    }

    kinderProcess.stdout.on('data', function (data) {
        process.stdout.write(data.toString('utf8'));
        projectOutput += data;
    });

    kinderProcess.stderr.on('data', function (data) {
        console.log('stderr: ' + data.toString('utf8'));
        projectErr += data;
    });

    kinderProcess.on('close', function (code) {
        console.log('child process exited with code ' + code);
        if (code === 0) {
            console.log("execution ok");
            console.log("project output:", projectOutput);

            deferred.resolve(projectOutput);
        } else {
            console.log("ERROR: project execution failed!");
            deferred.reject({msg: projectErr, code: code})
        }
    });

    kinderProcess.on('error', function (error) {
        console.log("error spawning child process:", error);
        deferred.reject({msg: 'command (' + cmd + ') executable failed to run.', code: error})
    });
    return deferred.promise;
}

/* Each command in commandList ought to be a tuple:
 * {
 *      command: "command to execute",
 *      arguments: [ 'array', 'of', 'arguments' ],
 *      directive: pipeToNext | chartOutput |
 * }
 * */

function executeProject(basePath, commandList) {
    var deferred = q.defer();
    var pipeToNext = false;
    //var output;
    var chartData = [];
    commandList.forEach(function(item) {
        if(item.directive === 'pipeToNext') {
            pipeToNext = true;
        } else {
            pipeToNext = false;
        }
        executeCommand(item.command, item.arguments, pipeToNext ? output : null, basePath )
            .then(function(output) {
                if(item.directive === 'chartOutput') {
                    chartData.push(output);
                }
            });


    });
    return deferred;
}

exports.executeCommand = executeCommand;
exports.executeProject = executeProject;
