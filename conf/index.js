const getArgv = (name) => {
    const argvs = process.argv.find(item => {
        return item.indexOf(`${name}`) !== -1
    }) || ''
    return argvs.split('=').length < 2 ? false : argvs.split('=')[1]
}

module.exports = {
    getArgv
}
