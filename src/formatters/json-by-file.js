// LICENSE : MIT
"use strict";
import {countBy} from "lodash";
function countUsage(usage) {
    return countBy(usage);
}
export default function format(results) {
    var output = results.map(result => {
        const {filePath, usage} = result;
        return Object.assign({"@file": filePath}, countUsage(usage));
    });
    return JSON.stringify(output);
}