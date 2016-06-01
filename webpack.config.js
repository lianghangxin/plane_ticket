var webpack =require('webpack')
var path =require('path')
// var HtmlWebpackPlugin = require('html-webpack-plugin')
//加载sass、less需要的插件
var  ExtractTextPlugin = require('extract-text-webpack-plugin');
var config={
    // entry:path.resolve(__dirname,'./src/main.js'),
    entry:[
      'webpack-dev-server/client?http://localhost:8080/','webpack/hot/dev-server',
      './src/main.js'],
    output:{
        path: path.resolve(__dirname,"dist"),
        publicPath:'/dist/',
        filename:'app.js'
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('css/style.css')
    ],
     resolveLoader: {
      root: path.join(__dirname, 'node_modules'),
      extensions: ['', '.loader.js', '.js', '.vue']
    },

    // 模块
    module:{
        noParse: /es6-promise\.js$/,
        loaders:[
            {
                test:/\.css$/,
                loader:ExtractTextPlugin.extract("style-loader","css-loader")  
            },
            {
                test:/\.less?$/,
                loader:ExtractTextPlugin.extract("style-loader","css-loader!less-loader")
                
            },{
                test: /\.(jpg|png|gif)$/,
                loader: "file-loader?limit=8192&name=images/[hash].[ext]"
            },
             // {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},//inline base64 URLs for <=8k images, direct URLs for the rest
            { 
              test: /\.(woff|svg|eot|ttf)\??.*$/,
              loader: 'url-loader?limit=50000&name=font/[name].[ext]'
            },
            {
                test: /\.vue$/,
                loader: 'vue'
             },
             {
                test: /\.js$/,
                // excluding some local linked packages.
                // for normal use cases only node_modules is needed.
                exclude: /node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
                loader: 'babel'
            }
        ]
    },
    babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  }
}
module.exports = config;

if (process.env.NODE_ENV === 'production') {
  module.exports.plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ]
} else {
  module.exports.devtool = '#source-map'
}