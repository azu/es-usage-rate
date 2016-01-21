#!/usr/bin/env node
var argv = require('minimist')(process.argv.slice(2));
var fs = require("fs");
var concat = require('concat-stream');
var execute = require("../lib/cli/cli").execute;
var executeContent = require("../lib/cli/cli").executeContent;
var input = process.argv[2];
if (argv.h || argv.help) {
    return console.log(fs.readFileSync(__dirname + "/usage.txt", "utf-8"));
}
if (input) {
    var output = execute(argv);
    if(output.length > 0) {
        console.log(output)
    }
} else {
    process.stdin.pipe(concat(function (buf) {
        console.log(executeContent(buf.toString('utf8')));
    }));
}