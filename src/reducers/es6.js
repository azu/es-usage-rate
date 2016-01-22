// LICENSE : MIT
"use strict";
// ES6 https://github.com/estree/estree/blob/master/es6.md
const ES6_TYPE = [
    "ForOfStatement",
    "GeneratorExpression", // <= not ESTree
    "GeneratorDeclaration", // <= not ESTree
    "VariableDeclaration_let",// <=
    "VariableDeclaration_const",// <=
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
    "Exports",
    "ImportDeclaration",
    "ImportSpecifier",
    "ImportDefaultSpecifier",
    "ImportNamespaceSpecifier",
    "ExportNamedDeclaration",
    "ExportSpecifier",
    "ExportDefaultDeclaration",
    "ExportAllDeclaration"
];
export default function filter(nodeList) {
    return nodeList.filter(nodeName => {
        return ES6_TYPE.some(type => type === nodeName);
    });
}