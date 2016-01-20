// LICENSE : MIT
"use strict";
import path from "path";
import resolveModule from "./utils/resolve-module"
export const createMapper = (mapperName) => {
    return resolveModule(mapperName, path.join(__dirname, "mappers"));
};
