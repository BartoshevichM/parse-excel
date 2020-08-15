'use strict'

const { parseAllObj, parseAllJson } = require('./index')

const res = parseAllObj('C:\\Users\\Bartoshevich\\Downloads\\ddd\\')
const res2 = parseAllJson('C:\\Users\\Bartoshevich\\Downloads\\ddd\\')

console.log(res2)
