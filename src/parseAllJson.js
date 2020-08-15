'use strict'

const parseAllObj = require('./parseAllObj')

module.exports = (directory) => {
    let res = parseAllObj(directory)
    return JSON.stringify(res)
}
