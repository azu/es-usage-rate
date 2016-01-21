// LICENSE : MIT
"use strict";
import traverse from 'babel-traverse';
export default function map(ast) {
    const results = [];
    traverse(ast, {
        enter(path) {
            const node = path.node;
            if (node.type) {
                if (node.type === "VariableDeclaration") {
                    results.push(`${node.type}:${node.kind}`);
                } else {
                    results.push(node.type);
                }
            }
        }
    });
    return results;
}