const webpack = require("webpack");
const path = require("path");

let config = {
  entry: "./src/aquarium.js",
  mode: 'development',
  output: {
    path: path.resolve(__dirname, "./public"),
    filename: "./app.js"
  }
}

module.exports = config;