const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');
const webpack = require('webpack');

module.exports = {
  entry: ['./src/index.js', 'webpack-hot-middleware/client.js'],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode:process.env.NODE_ENV == "production" ? 'production' : false,
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader'
        ]
      },
      {
        test: /\.xml$/,
        use: [
          'xml-loader'
        ]
      },
      {
        test:/(\.(jsx|js))$/,
        use: ['babel-loader?cacheDirectory=true'],
        include:path.resolve(__dirname,'./src')
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '管理输出',
      filename:'index.html',
      template:path.join(__dirname,'index.html')
    }),
  
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('./dll/vandor-manifest.json')
    }),
      
  ],
  performance: { hints: false }
};