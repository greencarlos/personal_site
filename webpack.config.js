const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    TODO:'./src/TODO/todo_index.js',
    TicTac: './src/TicTacToe/tic_index.js',
  },
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: '[name].js',
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader:' ]}
    ]
  },
  mode: 'development',
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({template: 'front-end/todo.html'}),
    new HtmlWebpackPlugin({template: 'front-end/tictac.html'})
  ]
}
