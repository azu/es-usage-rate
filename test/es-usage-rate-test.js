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
            console.log(output);
        });
    });
    describe("usageOfContent", function () {
        it("should return string", ()=> {
            var usage = usageOfContent("var a = 1");
            assert(Array.isArray(usage));
        });
    });
});