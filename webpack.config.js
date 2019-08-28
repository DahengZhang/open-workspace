const path = require('path')
const glob = require('glob')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const conf = require('./conf/webpack.base.config')
const { getPath, getTemplate, getHtmlName, buildPath, options } = require('./conf')

const entryPath = glob.sync(
    buildPath
    ? `./src/**/${buildPath}/**/*.entry.js`
    : './src/**/*.entry.js'
).sort((a, b) => b.split('/').length - a.split('/').length)
let entry = {}
let htmlPlugins = []
let rewrites = []

for (let i = 0; i < entryPath.length; i++) {
    const e = entryPath[i]
    const ep = getPath(e)
    entry[path.join(ep, 'index')] = [path.resolve(__dirname, e)]

    htmlPlugins.push(new HtmlWebpackPlugin({
        buildOptions: options,
        template: 'ejs-loader!' + getTemplate(ep),
        filename: `${path.join('views', ep, getHtmlName(e))}.html`,
        inject: true,
        chunks: [path.join(ep, 'index')],
        minify: {
            removeComments: false,
            collapseWhitespace: false
        }
    }))

    rewrites.push({
        from: new RegExp('^\/' + ep),
        to: `${path.join('/views', ep, getHtmlName(e))}.html`
    })
}

module.exports = merge(conf, {
    entry,
    devServer: {
        historyApiFallback: {
            rewrites
        }
    },
    plugins: [
        ...htmlPlugins
    ]
})
