const webpack = require('webpack')
const path = require('path')

/* plugin to create code common & splitting */
const extractCommons = new webpack.optimize.CommonsChunkPlugin({
  name: 'vendor',
  filename: 'vendor.js'
})

const config = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    app: './app.js', /* js for app module */
    admin: './admin.js', /* js for admin module */
    vendor: ['jquery', 'lodash'] /* js in common for all modules */
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      include: path.resolve(__dirname, 'src'),
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [
            ['es2015', { modules: false }]
            /*
              modules: false -
              removes unused exports from bundles to bring down the file size
            */
          ]
        }
      }]
    }]
  },
  plugins: [
    extractCommons,
  ]
}

module.exports = config
