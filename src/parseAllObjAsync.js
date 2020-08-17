'use strict'

const {_OBJ} = require('../utils/constants')
const parseAllAsync = require('../utils/parseAllAsync')

module.exports = (directory) => {
return parseAllAsync(directory, _OBJ)
}
