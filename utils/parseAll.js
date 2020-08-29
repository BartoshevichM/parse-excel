'use strict'

const fs = require('fs')
const parse = require('./parse')
const { _checkDirectory } = require('./common')

module.exports = (directory, type) => {
    directory = _checkDirectory(directory)
    const _fileNames = fs.readdirSync(directory)

    if (_fileNames) {
        let _res = []
        for (let fileName of _fileNames) {
            const data = parse(`${directory}${fileName}`, type)
            data.length ? _res.push(data) : ''
        }
        return _res
    }
    return null
}
