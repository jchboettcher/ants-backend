const merge = require('lodash.merge')
const usersBy1 = require('./usersBy1')
const usersBy2 = require('./usersBy2')
const recentUsersBy1 = require('./recentUsersBy1')
const recentUsersBy2 = require('./recentUsersBy2')

const resolvers = [usersBy1, usersBy2, recentUsersBy1, recentUsersBy2]

module.exports = merge(...resolvers)
