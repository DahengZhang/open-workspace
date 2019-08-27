const fs = require('fs')
const path = require('path')
const glob = require('glob')

const { getArgv } = require('./conf')

console.log(getArgv('domain'))
