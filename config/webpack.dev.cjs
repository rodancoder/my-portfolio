const path = require('path')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.cjs')

const devconfig = {
  mode: 'development',
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.(css|sass|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [new ReactRefreshWebpackPlugin()],
  devServer: {
    port: 5050,
    allowedHosts: 'all',
    static: {
      directory: path.join(__dirname, '../public'),
    },
    hot: true,
    historyApiFallback: true,
  },
}

module.exports = merge(common, devconfig)
