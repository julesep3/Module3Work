const _ = require('lodash')
const moment = require('moment')

const last_week = moment().subtract(6, 'days').calendar()
console.log(last_week)