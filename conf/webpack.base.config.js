const path = require('path')
const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const { options } = require('./index')
const isDev = process.env.NODE_ENV == 'development'
const publicPath = isDev ? '/' : options.domain + options.path

module.exports = {
    mode: process.env.NODE_ENV,
    devtool: isDev ? 'eval' : 'source-maps',
    output: {
        path: path.resolve(__dirname, '../dist/'),
        publicPath,
        filename: 'assets/[name].bundle.js',
        chunkFilename: 'assets/[name].chunk.js'
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            '@': path.resolve(__dirname, '../src/')
        }
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /\.vue$/,
            exclude: /node_modules/,
            loader: 'vue-loader'
        }, {
            test: /\.(sc|sa|c)ss$/,
            exclude: /node_modules/,
            use: [
                isDev ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
                'css-loader',
                'postcss-loader',
                'sass-loader'
        ]
        }, {
            test: /\.(png|jpe?g|gif)$/,
            exclude: /node_modules/,
            use: {
            loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'assets/[name].[hash:6].[ext]',
                    publicPath
                }
            }
        }]
    },
    devServer: {
        host: '0.0.0.0',
        port: 7000,
        hot: true,
        overlay: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            publicPath,
            filename: 'assets/[name].bundle.css',
            chunkFilename: 'assets/[name].chunk.css'
        }),
        new CopyWebpackPlugin([{
            from: 'static', to: 'static'
        }])
    ]
}
