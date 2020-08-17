'use strict'

const {_JSON} = require('../utils/constants')
const parseAllAsync = require('../utils/parseAllAsync')

module.exports = (directory) => {
    return parseAllAsync(directory, _JSON)
}
