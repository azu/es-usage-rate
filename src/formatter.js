// LICENSE : MIT
"use strict";
import path from "path";
import resolveModule from "./utils/resolve-module"
export const createFormatter = (formatterName) => {
    return resolveModule(formatterName, path.join(__dirname, "formatters"));
};
