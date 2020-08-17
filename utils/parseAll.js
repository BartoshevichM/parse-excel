'use strict'

const xlsx = require('xlsx')
const fs = require('fs')
const {_readFile} = require('./common')

module.exports = (directory, type) => {
    const _fileNames = fs.readdirSync(directory)

    if (_fileNames) {
        let _res = []
        for (let fileName of _fileNames) {
            const xlsxFile = xlsx.readFile(`${directory}${fileName}`, {type: 'binary'})
            const _tabNames = xlsxFile.SheetNames
            const data = _readFile(_tabNames, xlsxFile, type)
            data.length ? _res.push(data) : ''
        }
        return _res
    }
    return null
}
