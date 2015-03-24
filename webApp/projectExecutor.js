
var child = require('child_process');
var q = require('q');

function executeCommand(command, argumentArray, input) {
    var projectsPathPrefix = 'assets/project_sources/';
    var deferred = q.defer();
    var cmd = command;
    var args = argumentArray;

    var projectOutput = "";
    var projectErr = "";

    var kinderProcess = child.spawn(cmd, args);

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
        deferred.reject({msg: 'transit (' + cmd + ') executable failed to run.', code: error})
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

function executeProject(commandList) {
    var pipeToNext = false;
    var output;
    var chartData = [];
    commandList.forEach(function(item) {
        if(item.directive === 'pipeToNext') {
            pipeToNext = true;
        } else {
            pipeToNext = false;
        }
        output = executeCommand(item.command, item.arguments, pipeToNext ? output : null )

        if(item.directive === 'chartOutput') {
            chartData.push(output);
        }
    });
    return chartData;
}

module.exports = executeCommand;
module.exports = executeProject;
