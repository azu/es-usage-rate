// LICENSE : MIT
"use strict";
export function nodeName(node) {
    if (node.generator) {
        return "Generator" + node.type.replace(/^Function/, "");
    }
    if (node.type) {
        switch (node.type) {
            case "VariableDeclaration":
                return `${node.type}:${node.kind}`;
                break;
            default:
                return node.type;
                break
        }
    }
}