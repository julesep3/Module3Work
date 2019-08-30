const _ = require("lodash")
const data = require("./class-1-data.json")
const moment = require('moment')

const sale_end_date = moment().add(7, 'days').calendar()

const target_client = _.find(data, function(o) {return ((o.age < 30) && (o.sex === 'F')) })

console.log("Hello " + target_client.name + ",\n")
console.log("Have you been window-shopping outfits for your cat?\n")
console.log("From now until " + sale_end_date + ", we are having a 50% off Sale on mini cat top hats and tux jackets!!!")
console.log("Don't wait, limited supplies available!")
console.log(" - From your friends at kittycloset.com")