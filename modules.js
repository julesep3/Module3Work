const _ = require('lodash')
const moment = require('moment')

const data = [{name: "Zach"}, {name: "Bob"}, {name: "Susan"}]

const find_zach = _.find(data, function(x) { return x.name === "Zach"})
console.log(find_zach)