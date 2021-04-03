const User = require('../../models/User')

const usersBySteps = async (obj, { level }, context) => {
  try {
    const users = await User.query().where({level}).orderBy('steps','ASC','crumbs','ASC','createdAt','DESC').limit(5)
    return users
  } catch (error) {
    // eslint-disable-next-line no-console
    console.warn(error)
    throw new Error('failed to get users by steps')
    // throw error
  }
}
const resolver = {
  Query: { usersBySteps },
}

module.exports = resolver
