const path = require('path');

module.exports = {
  output: {
    filename: 'my-first-webpack.bundle.js',
  },
  module: {
    rules: [{ test: /\.txt$/, use: 'raw-loader' }],
  },
  // eslint-disable-next-line no-undef
  plugins: [new HtmlWebpackPlugin({ template: './src/pages/Medical/index.html' })],
};