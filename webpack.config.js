const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const dotenv = require('dotenv')

module.exports = () => {
  const env = dotenv.config().parsed
  const envKeys = Object.keys(env).reduce((result, next) => {
    result[`process.env.${next}`] = JSON.stringify(env[next])
    return result
  }, {})

  return {
    devtool: 'source-map',
    resolve: {
      extensions: ['.ts', '.tsx', '.js']
    },
    module: {
      rules: [
        {
          test: /\.ts(x?)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'ts-loader'
            }
          ]
        },
        {
          enforce: 'pre',
          test: /\.js$/,
          loader: 'source-map-loader'
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader']
        }
      ]
    },
    plugins: [new HtmlWebpackPlugin({ template: './src/index.html' }), new webpack.DefinePlugin(envKeys)],
    externals: {
      react: 'React',
      'react-dom': 'ReactDOM'
    }
  }
}
