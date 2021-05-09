const merge = require('lodash.merge')
const usersBy1 = require('./usersBy1')
const usersBy2 = require('./usersBy2')

const resolvers = [usersBy1, usersBy2]

module.exports = merge(...resolvers)
