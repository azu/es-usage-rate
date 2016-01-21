// LICENSE : MIT
"use strict";
import traverse from 'babel-traverse';
import {nodeName} from "../utils/node-name";
export default function map(ast) {
    const results = [];
    traverse(ast, {
        enter(path) {
            const node = path.node;
            results.push(nodeName(node));
        }
    });
    return results;
}