const path = require('path');
const { name } = require('../package.json');
const baseConfig = require('./webpack.config.base');

module.exports = {
  ...baseConfig,

  mode: process.env.BUILD_ENV ? 'production' : 'none',

  entry: {
    index: path.resolve(__dirname, '../src/index.ts')
  },

  devtool: 'source-map',
  
  output: {
    library: name,
    libraryTarget: 'umd',
    filename: '[name].js',
    path: path.resolve(__dirname, '../lib')
  },
}