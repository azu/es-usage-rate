// LICENSE : MIT
"use strict";
import * as fs from "fs";
import {parse} from "./parser";
import {createFormatter} from "./formatter"
import {createMapper} from "./mapper"
import {createReducer} from "./reducer"
const defaultOptions = {
    formatter: "line-by-line",
    mapper: "line-by-line",
    reducer: "identity"
};
const mapReduce = (options) => {
    const map = createMapper(options.mapper);
    const reduce = createReducer(options.reducer);
    return (code) => reduce(map(parse(code)));
};
export function usageOfContent(code, options = {}) {
    const mergedOptions = Object.assign({}, defaultOptions, options);
    const format = createFormatter(mergedOptions.formatter);
    const nodeList = mapReduce(mergedOptions)(code);
    return format([{usage: nodeList}]);
}
export function usageOfFiles(filePathList, options = {}) {
    const mergedOptions = Object.assign({}, defaultOptions, options);
    const nodeList = filePathList.map(filePath => {
        const code = fs.readFileSync(filePath, "utf-8");
        return {
            filePath,
            usage: mapReduce(mergedOptions)(code)
        }
    });
    const format = createFormatter(mergedOptions.formatter);
    return format(nodeList);
}