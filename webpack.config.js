const webpack = require('webpack');
const path = require('path');


module.exports = {
  entry: [
    './src/index'
  ],
  module: {
    loaders: [
      { test: /\.js?$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.s?css$/, loader: 'style-loader!css-loader!sass-loader' },
      { test: /\.html$/, loader: 'file?name=[name].[ext]' },
      { test: /\.(png|svg|obj|mtl|ply|dae|jpg|gltf)$/, 
      loader: 'url-loader?limit=100000' }
    ]
  },
  resolve: {
    extensions: ['.js','.scss','.gltf']
  },
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devtool: 'cheap-eval-source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};
