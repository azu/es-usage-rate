#!/usr/bin/env node
var argv = require('minimist')(process.argv.slice(2));
var concat = require('concat-stream');
var execute = require("../lib/cli/cli").execute;
var executeContent = require("../lib/cli/cli").executeContent;
var input = process.argv[2];
if (input) {
    console.log(execute(argv))
} else {
    process.stdin.pipe(concat(function (buf) {
        console.log(executeContent(buf.toString('utf8')));
    }));
}