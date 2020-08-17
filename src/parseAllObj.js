'use strict'

const {_OBJ} = require('../utils/constants')
const parseAll = require('../utils/parseAll')

module.exports = (directory) => {
    return parseAll(directory, _OBJ)
}

