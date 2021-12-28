const merge = require('lodash.merge')
const usersBy1 = require('./usersBy1')
const usersBy2 = require('./usersBy2')
const recentUsersBy1 = require('./recentUsersBy1')
const recentUsersBy2 = require('./recentUsersBy2')
const allUsersBy1 = require('./allUsersBy1')
const allUsersBy2 = require('./allUsersBy2')
const userByName1 = require('./userByName1')
const userByName2 = require('./userByName2')

const resolvers = [
  usersBy1, usersBy2,
  recentUsersBy1, recentUsersBy2,
  allUsersBy1, allUsersBy2,
  userByName1, userByName2,
]

module.exports = merge(...resolvers)
