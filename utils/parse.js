'use strict'

const xlsx = require('xlsx')
const {_readFile} = require('./common')


module.exports = (filePath, type) => {
    const xlsxFile = xlsx.readFile(filePath, {type: 'binary'})
    const _tabNames = xlsxFile.SheetNames
    const data = _readFile(_tabNames, xlsxFile, type)
    return data.length ? data : ''
}
