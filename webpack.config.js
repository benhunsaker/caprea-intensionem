module.exports = {
  entry: {
    bundle: './public/javascripts/src/index.jsx',
  },
  output: {
    path: __dirname,
    publicPath: '/',
    filename: '[name].js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loaders: ['babel', __dirname + '/lib/pre-loader']
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
