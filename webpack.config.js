var webpack = require('webpack');
var path = require('path');
module.exports = {
  entry:{
    cart:[
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/app'
    ]
  },
  output: {
    path: path.join(__dirname, '/'),
    filename: '[name].bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'react-hot!babel',
      include: [path.join(__dirname, 'src'), path.join(__dirname, 'src/*')]
    }, {
      test: /\.less$/,
      loader: 'style!css!autoprefixer!less'
    }, {
      test: /\.css$/,
      loader: 'style!css!autoprefixer'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
