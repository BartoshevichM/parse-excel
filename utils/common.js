'use strict'

const xlsx = require('xlsx')
const {_JSON, _OBJ} = require('./constants')

const _getObject = (columsArr, row) => {
    let obj = {}
    for (let column of columsArr) {
        obj[column.column] = row[column.position]
    }
    return obj
}

//check if last symbol is slash
const _checkDirectory = dir => /(\\|\/)$/.test(dir) ? dir : `${dir}${_getSysSeparator()}`
const _getSysSeparator = () => /^win/.test(process.platform) ? '\\' : '/'

module.exports = {
    _readFile(tabNames, xlsxFile, type) {
        for (let tab of tabNames) {
            const _res = []
            const _currentTab = xlsxFile.Sheets[tab]
            const rowsArr = xlsx.utils.sheet_to_json(_currentTab, {
                header: 1,
                defval: null,
                blankrows: true
            })

            if (rowsArr.length) {
                const _columnNames = rowsArr[0]
                    .map((el, index) => {
                        if (el) return {column: el, position: index}
                    })
                    .filter(el => el)

                for (let [index, row] of rowsArr.entries()) {
                    if (index > 0) {
                        const obj = _getObject(_columnNames, row)
                        switch (type) {
                            case _OBJ:
                                _res.push(obj)
                                break
                            case _JSON:
                                _res.push(JSON.stringify(obj))
                                break
                        }
                    }
                }
            }
            return _res
        }
    },
    _checkDirectory
}
