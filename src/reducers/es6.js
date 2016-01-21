// LICENSE : MIT
"use strict";
// ES6 https://github.com/estree/estree/blob/master/es6.md
const ES6_TYPE = [
    "ForOfStatement",
    "VariableDeclaration:let",
    "VariableDeclaration:const",
    "ArrowFunctionExpression",
    "YieldExpression",
    "TemplateLiteral",
    "TaggedTemplateExpression",
    "TemplateElement",
    "ObjectPattern",
    "ArrayPattern",
    "RestElement",
    "AssignmentPattern",
    "ClassBody",
    "MethodDefinition",
    "ClassDeclaration",
    "ClassExpression",
    "MetaProperty",
    "ModuleDeclaration",
    "ModuleSpecifier",
    "Imports",
    "Exports"
];
export default function filter(nodeList) {
    return nodeList.filter(nodeName => {
        return ES6_TYPE.some(type => type === nodeName);
    });
}