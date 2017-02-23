const path = require('path');
const webpack = require('webpack');
module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './app.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist/assets'),
    publicPath: 'assets'
  },
  devServer: {
    contentBase: path.resolve(__dirname, './src'),
  },
  devtool: 'sourceMap',
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: [ 'style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap' ]
      },
      {
        test: /\.html$/,
        loader: "raw-loader"
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader'
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'url-loader'
      }
    ]
  }
};
