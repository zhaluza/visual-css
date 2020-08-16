const HtmlWebPackPlugin = require('html-webpack-plugin');
const htmlPlugin = new HtmlWebPackPlugin({
  template: './client/index.html',
  filename: './index.html',
});
const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV,
  devServer: {
    contentBase: path.resolve(__dirname, 'client'),
    historyApiFallback: true,
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
  entry: './client/index.js',
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  plugins: [htmlPlugin],
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};
