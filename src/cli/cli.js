// LICENSE : MIT
"use strict";
import {usageOfContent,usageOfFiles} from "../es-usage-rate";
import globby from "globby"
export function executeContent(content, argv) {
    return usageOfContent(content, argv);
}
export function execute(argv) {
    const filePathList = globby.sync(argv._, {
        nodir: true
    });
    return usageOfFiles(filePathList, argv);
}