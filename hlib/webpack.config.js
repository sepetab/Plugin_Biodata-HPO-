var path = require('path')

module.exports = {
  entry: './hlib.js',
  optimization: {
    minimize: false,
  },
  output: {
    path: path.join(__dirname, '.'),
    filename: 'hlib2.bundle.js',
    library: 'hlib',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
       use: ['source-map-loader'],
      }
    ]
  }
};