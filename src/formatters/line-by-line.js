// LICENSE : MIT
"use strict";
export default function format(results) {
    let output = "";
    results.forEach(result => {
        const {filePath, usage} = result;
        output += usage.join("\n");
    });
    return output;
}