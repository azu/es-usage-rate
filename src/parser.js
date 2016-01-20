// LICENSE : MIT
"use strict";
export function parse(code) {
    return require("babylon").parse(code, {
        // parse in strict mode and allow module declarations
        sourceType: "module",

        plugins: [
            "jsx",
            "flow",
            "asyncFunctions",
            "classConstructorCall",
            "doExpressions",
            "trailingFunctionCommas",
            "objectRestSpread",
            "decorators",
            "classProperties",
            "exportExtensions",
            "exponentiationOperator",
            "asyncGenerators",
            "functionBind",
            "functionSent"
        ]
    });
}