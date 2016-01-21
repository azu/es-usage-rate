// LICENSE : MIT
"use strict";
import {countBy} from "lodash";
function countUsage(usage) {
    return countBy(usage);
}
function matchAll(strings, index) {
    const char = strings[0][index];
    return strings.every(string => string[index] === char);
}
function getDuplicationStr(strings) {
    let matchChars = "";
    let firstString = strings[0];
    for (let i = 0; i < firstString.length; i++) {
        const char = firstString[i];
        if (matchAll(strings, i)) {
            matchChars += char;
        }
    }
    return matchChars;
}
export default function format(results, filePathList) {
    const key = getDuplicationStr(filePathList);
    let output = {};
    output["@file"] = key;
    results.forEach(result => {
        const {usage} = result;
        var usageValues = countUsage(usage);
        Object.keys(usageValues).forEach(key => {
            if (!output[key]) {
                output[key] = 0;
            }
            output[key] += usageValues[key];
        });
    });
    return JSON.stringify(output);
}