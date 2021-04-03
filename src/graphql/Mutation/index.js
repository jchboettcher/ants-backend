const merge = require('lodash.merge')
const addUser = require('./addUser')

const resolvers = [addUser]

module.exports = merge(...resolvers)
