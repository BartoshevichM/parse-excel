'use strict'

const parse = require('../utils/parse')
const {_JSON} = require('../utils/constants')

module.exports = (filePath) => {
    return parse(filePath, _JSON)
}
