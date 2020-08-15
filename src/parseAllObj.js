'use strict'

const xlsx = require('xlsx')
const fs = require('fs')
const {_readFile} = require('../utils/common')

module.exports = (directory) =>{
        let _res = []
        const _fileNames = fs.readdirSync(directory)

        if (_fileNames) {
            for (let fileName of _fileNames) {
                const xlsxFile = xlsx.readFile(`${directory}${fileName}`, {type: 'binary'})
                const _tabNames = xlsxFile.SheetNames
                const data = _readFile(_tabNames, xlsxFile)
                data.length ? _res.push(data) : ''
            }
        }
        return _res
}

