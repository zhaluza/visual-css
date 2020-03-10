const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV,
  devServer: {
    contentBase: path.resolve(__dirname, 'client'),
    publicPath: '/build/',
    proxy: {
      '/users': 'http://localhost:3000'
    }
  },
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
};
