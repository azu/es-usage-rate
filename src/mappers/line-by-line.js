// LICENSE : MIT
"use strict";
import traverse from 'babel-traverse';
export default function map(ast) {
    const results = [];
    traverse(ast, {
        enter(path) {
            const node = path.node;
            if (node.type) {
                if (typeof node.type === "string") {
                    results.push(node.type);
                }
            }
        }
    });
    return results;
}