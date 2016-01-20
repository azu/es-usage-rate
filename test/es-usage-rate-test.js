// LICENSE : MIT
"use strict";
import assert from "power-assert";
import {usageOfContent, usageOfFiles} from "../src/es-usage-rate";
import glob from "glob";
describe("usage", function () {
    describe("usageOfFiles", function () {
        it("should return string", ()=> {
            const filePathList = glob.sync(__dirname + "/../src/**.js");
            var output = usageOfFiles(filePathList);
            assert(typeof output === "string");
        });
    });
    describe("usageOfContent", function () {
        it("should return string", ()=> {
            var output = usageOfContent("var a = 1");
            assert(typeof output === "string");
            assert.equal(output, `Program
VariableDeclaration
VariableDeclarator
Identifier
NumericLiteral`)
        });
    });
});