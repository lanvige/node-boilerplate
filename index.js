
// Polyfill to translate the new API syntax.
// Sourcemaps are nice.
// require('source-map-support/register');

// In dev-mode, we use babel-register.
// In prod-mode, the files have already been transpiled.

// 使用这个配置后，就不需要 .babelrc 文件了

require("@babel/register")({
  presets: [[
    "@babel/preset-env", { targets: { node: "10.4.1" }}]
  ]
});


require("./src/index.js");
