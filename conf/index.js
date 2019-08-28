const fs = require('fs')
const path = require('path')

const conf = require('./config.json')
const isDev = process.env.NODE_ENV == 'development'

const getPathReg = /\.\/src\/(\S*)\//
const getTemplateReg = /template\.html/
const getHtmlNameReg = /\/([^/]*)\.entry\.js$/

const getArgv = (name) => {
    const argvs = process.argv.find(item => {
        return item.indexOf(`--${name}`) !== -1
    }) || ''
    return argvs.split('=').length < 2 ? false : argvs.split('=')[1]
}

const getPath = (entry) => {
	return entry.match(getPathReg) && entry.match(getPathReg)[1] || ''
}

const getTemplate = (entry) => {
    const p = path.resolve(__dirname, '../src/', entry)
    const template = fs.readdirSync(p).filter(item => fs.statSync(path.resolve(__dirname, '../src/', entry, item)).isFile()).find(item => getTemplateReg.test(item))
    if (template) {
        return path.join(p, template)
    } else if (entry) {
        let e = entry.split('/')
        e.pop()
        return getTemplate(e.join('/'))
    } else {
        console.log('缺少根模板')
        process.exit()
    }
}

const getHtmlName = (entry) => {
    return entry.match(getHtmlNameReg) && entry.match(getHtmlNameReg)[1] || ''
}

module.exports = {
    getArgv,
    getPath,
    getTemplate,
    getHtmlName,
    options: conf[getArgv('env') || (isDev ? 'local' : 'dev')],
    buildPath: getArgv('path')
}
