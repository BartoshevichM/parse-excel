'use strict'

const {_JSON} = require('../utils/constants')
const parseAll = require('../utils/parseAll')

module.exports = (directory) => {
    return parseAll(directory, _JSON)
}
