const path = require('path');

module.exports = {
  entry: "./src/app.js",
  mode: "development",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
  },
  module: {
    rules: [{
      loader: "babel-loader",
      test: /\.js$/,
      exclude: /node_module/
    },
    {
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"]
    }]
  },
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: path.join(__dirname, "public"),
    port: 1013
  }
};

//loader
