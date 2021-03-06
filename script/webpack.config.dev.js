const baseConfig = require('./webpack.config.base');
const { resolve } = require('path')
let { name } = require('../package.json')

name = name.split('-').slice(1,3).join('-');

module.exports = {
  ...baseConfig,
  mode: 'development',
  entry: {
    local_index: resolve(__dirname, '../demo/index.tsx'),
    index: resolve(__dirname, '../src/index.ts')
  },
  devServer: {
    publicPath: `/${name}`,
    historyApiFallback: true,
    disableHostCheck: true,
    contentBase: resolve(__dirname, '../demo'),
    https: !!process.env.HTTPS,
    port: 9999,
    host: 'localhost',
    stats: 'minimal',
    open: true,
    openPage: `${name}/`,
    hot: true,
    inline: true
  },
  devtool: 'cheap-module-eval-source-map'
}