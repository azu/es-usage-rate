// LICENSE : MIT
"use strict";
export function parse(code) {
    return require("babylon").parse(code, {
        // parse in strict mode and allow module declarations
        sourceType: "module",

        plugins: [
            // enable experimental async functions
            "asyncFunctions",
            "classProperties",

            // enable jsx and flow syntax
            "jsx",
            "flow"
        ]
    });
}