const merge = require('lodash.merge')
const usersBySteps = require('./usersBySteps')
const usersByCrumbs = require('./usersByCrumbs')

const resolvers = [usersBySteps, usersByCrumbs]

module.exports = merge(...resolvers)
