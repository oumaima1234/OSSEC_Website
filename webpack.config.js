const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  entry: [
    //'react-hot-loader/patch',
    "./src/index.js"
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,

        use: ["babel-loader"]
      },
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },

  resolve: {
	 mainFields: ['browser', 'main', 'module'],
     extensions: ['.js', '.json', '.jsx',".css"]
  },
  output: {
    path: __dirname + "/dist",
    publicPath: "/",
    filename: "react_app.js"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin("react_app.css"),
    new UglifyJsPlugin({
      uglifyOptions: {
        output: {
          comments: false // remove comments
        },
        compress: {
          unused: true,
          dead_code: true, // big one--strip code that will never execute
          warnings: false, // good for prod apps so users can't peek behind curtain
          drop_debugger: true,
          conditionals: true,
          evaluate: true,
          drop_console: true, // strips console statements
          sequences: true,
          booleans: true
        }
      }
    })
  ],
  devServer: {
    contentBase: "./dist",
    hot: true,
    port: 3000,
    historyApiFallback: true,
    watchOptions: { aggregateTimeout: 300, poll: 1000 },
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "*"
    },

  }
};
