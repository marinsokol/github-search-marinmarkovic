const webpack = require('webpack')
const path = require('path')
const dotenv = require('dotenv')

/**
 * I use Typescript page to get example of webpack.config. Then I changed what I needed.
 * https://www.typescriptlang.org/docs/handbook/react-&-webpack.html
 */

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
    output: {
      path: path.resolve('./public/dist'),
      filename: 'main.js'
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
    plugins: [new webpack.DefinePlugin(envKeys)]
  }
}
