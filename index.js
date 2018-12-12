
// // In dev-mode, we use babel-register.
// // In prod-mode, the files have already been transpiled.
// require("babel-core/register")({
//     presets: ["es2017"],
//     plugins: ["transform-es2015-modules-commonjs"]
//   });

// require("./src/index.js");

// In dev-mode, we use babel-register.
// In prod-mode, the files have already been transpiled.

// 使用这个配置后，就不需要 .babelrc 文件了

require("@babel/register")({
  presets: [[
    "@babel/preset-env", { targets: { node: "10.4.1" }}]
  ]
});


require("./src/index.js");
