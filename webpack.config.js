const path = require('path');

module.exports = {
  mode: "production",
  entry: "./lib/main.js",
  devtool: "source-map",
  output: {
    filename: 'base32url.min.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'Base32URL',
    libraryTarget: 'umd',
  },
  optimization: {
    minimize: true
  }, 
  node: {
    net: 'empty',
  },
};