const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
  entry: {
    index: './src/index.js',
    print: './src/print.js',
  }, 
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  output: {
    // filename: 'main.js',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: './public/index.html',
    }),
  ],
  optimization: {
    runtimeChunk: 'single',
  },
};