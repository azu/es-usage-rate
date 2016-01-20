// LICENSE : MIT
"use strict";

import path from "path";
import resolveModule from "./utils/resolve-module"
export function createReducer(reducerName) {
    return resolveModule(reducerName, path.join(__dirname, "reducers"));

}