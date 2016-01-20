// LICENSE : MIT
"use strict";
const path = require("path");
const fs = require("fs");
export default function resolveModule(name, defaultDir) {
    var pathToModule;
    if (fs.existsSync(name)) {
        pathToModule = name;
    } else if (fs.existsSync(path.resolve(process.cwd(), name))) {
        pathToModule = path.resolve(process.cwd(), name);
    } else {
        pathToModule = path.join(defaultDir, name);
    }
    var resolvedModule;
    try {
        resolvedModule = require(pathToModule);
    } catch (ex) {
        throw new Error("Could not find resolvedModule " + name + "\n" + ex);
    }
    return resolvedModule;
}