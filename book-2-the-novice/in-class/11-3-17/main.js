const add = require('./add')
const subtract = require('./subtract')
const multiply = require('./multiply')
const divide = require('./divide')

let initialInteger = 100

initialInteger += add(55,25)
initialInteger += multiply(4,4)
initialInteger += divide(4,2)
initialInteger += subtract(40, 20)

console.log({ initialInteger })

initialInteger = 10