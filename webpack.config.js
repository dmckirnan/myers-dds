const webpack = require('webpack');
const path = require('path');

const config = {
  entry: {
    app: './client/index.js',
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
  },
  watch: true,
  module: {
    loaders: [{
      test: /\.jsx?/,
      loader: 'babel-loader',
      exclude: /node_modules/,
    },
    {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
    },
    {
      test: /\.scss$/,
      loaders: ['style-loader', 'css-loader', 'sass-loader'],
    },
    {
      test: /\.(png|jpg|)$/,
      loader: 'url?limit=25000',
    },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // For live reloading
    new webpack.NoErrorsPlugin(), // Makes sure Webpack will not compile if Errors

    // prints more readable module names in the browser console on HMR updates
    new webpack.NamedModulesPlugin(),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    historyApiFallback: true,
    inline: true,
    open: true,
  },
  resolve: {
    modulesDirectories: ['node_modules', 'src'],
    extensions: ['.js', '.jsx'],
  },
  devtool: 'eval-source-map',
};

module.exports = config;
