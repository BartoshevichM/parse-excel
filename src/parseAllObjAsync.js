'use strict'

const xlsx = require('xlsx')
const fs = require('fs')
const {_readFile} = require('../utils/common')
const {_OBJ} = require('../utils/constants')

module.exports = (directory) => {
    return new Promise((resolve, reject) => {
        fs.readdir(directory, (err, _fileNames) => {
            if (err)
                reject(err);
            else {
                if (_fileNames) {
                    let _res = []
                    for (let fileName of _fileNames) {
                        console.log('here: ', fileName)
                        const xlsxFile = xlsx.readFile(`${directory}${fileName}`, {type: 'binary'})
                        const _tabNames = xlsxFile.SheetNames
                        const data = _readFile(_tabNames, xlsxFile, _OBJ)
                        data.length ? _res.push(data) : ''
                    }
                    resolve(_res)
                }
            }
        })
    })
}
