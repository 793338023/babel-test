const fs = require("fs");
const path = require("path");
const babel = require("@babel/core");

const file = fs.readFileSync(path.resolve(__dirname, "./test2.js"), "utf-8");

// console.log(file);

var result = babel.transformSync(file, {
  plugins: ["./babel/index"],
});

fs.writeFileSync(path.resolve(__dirname, "./test3.js"), result.code, "utf-8");
