'use strict'

const xlsx = require('xlsx')

const _getObject = (columsArr, row) => {
    let obj = {}
    for (let column of columsArr) {
        obj[column.column] = row[column.position]
    }
    return obj
}

module.exports = {
    _readFile(tabNames, xlsxFile) {
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
                        _res.push(obj)
                    }
                }
            }
            return _res
        }
    }
}
