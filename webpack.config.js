const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: path.resolve(__dirname, 'src/app.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    clean: true,
  },
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 5001,
    open: true,
    hot: true,
    watchFiles: ['src/**/*'], // watch HTML/CSS/JS in src
  },
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      {test: /\.(svg|ico|png|webp|jpg|gif|jpeg)$/, type:'asset/resource' },
      { test: /\.js$/,
         exclude: /node_modules/,
         use : {
            loader : 'babel-loader',
            options : {
                presets: ['@babel/preset-env'],
            },
         },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'just a demo',
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/temp.html'),
    }),
  ],
};
