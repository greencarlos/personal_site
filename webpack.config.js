const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader:' ]}
    ]
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'front-end/todo.html'
    })
  ]
}
