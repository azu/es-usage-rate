// LICENSE : MIT
"use strict";
import {walk} from 'estree-walker';
export default function map(ast) {
    const results = [];
    walk(ast, {
        enter: function (node, parent) {
            if (node.type) {
                if (typeof node.type === "string") {
                    results.push(node.type);
                }
            }
        }
    });
    return results;
}