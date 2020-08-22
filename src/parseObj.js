'use strict'

const parse = require('../utils/parse')
const {_OBJ} = require('../utils/constants')

module.exports = (filePath) => {
    return parse(filePath, _OBJ)
}
