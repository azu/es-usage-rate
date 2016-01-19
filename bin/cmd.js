#!/usr/bin/env node
var file = process.argv[2];
var usageOfFiles = require("../lib/es-usage-rate").usageOfFiles;
console.log(usageOfFiles([file]));