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
  devServer: {
    contentBase: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    historyApiFallback: true,
    inline: true,
    open: true,
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false,
      },
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: 'eval-source-map',
};

module.exports = config;
