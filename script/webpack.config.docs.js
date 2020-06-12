const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');
const { name } = require('../package.json')
const base = require('./webpack.base');

const umdConfig = {
  ...base,

  mode: process.env.BUILD_ENV ? 'production' : 'none',

  devtool: 'source-map',
}

module.exports = [{
  ...umdConfig,

  entry: {
    'index': resolve(__dirname, '../demo/index.tsx'),
  },

  plugins: [
    ...umdConfig.plugins, 
    new HtmlWebpackPlugin({
      title: name.split('-').slice(1,2).join('-'),
      template: resolve(__dirname, '../docs/template.html')
    })
  ],

  output: {
    ...umdConfig.output,
    path: resolve(__dirname, '../docs')
  }
}]