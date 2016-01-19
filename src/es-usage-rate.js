// LICENSE : MIT
"use strict";
import * as fs from "fs";
import {parse} from "./parser";
import {createFormatter} from "./formatter"
import {createMapper} from "./mapper"
import {createReducer} from "./reducer"

export function usageOfContent(code) {
    const AST = parse(code);
    const map = createMapper();
    const reduce = createReducer();
    return reduce(map(AST));
}
export function usageOfFiles(filePathList) {
    const nodeList = filePathList.map(filePath => {
        const code = fs.readFileSync(filePath, "utf-8");
        return {
            filePath,
            usage: usageOfContent(code)
        };
    });
    const format = createFormatter();
    return format(nodeList);
}