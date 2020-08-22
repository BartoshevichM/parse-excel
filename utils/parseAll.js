'use strict'

const fs = require('fs')
const parse = require('./parse')

module.exports = (directory, type) => {
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
