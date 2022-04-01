const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  devtool: 'source-map',
  devServer: {
    static: path.resolve(__dirname, 'public'),
    port: 8080,
    open: true,
    hot: true
  },
  mode: 'development',
};
