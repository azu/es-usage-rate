// LICENSE : MIT
"use strict";
export const createFormatter = (formatterName) => {
    const format = require("./formatters/line-by-line");
    return format;
};
